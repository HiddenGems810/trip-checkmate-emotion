Add-Type -AssemblyName System.Drawing

$filePath = Join-Path (Get-Location) "public/assets/logo/logo-white.png"
Write-Host "Loading: $filePath"
$src = [System.Drawing.Bitmap]::FromFile($filePath)
$w = $src.Width
$h = $src.Height
Write-Host "Dimensions: $w x $h"

# Sample every 10 pixels to find bounding box fast
$minX = $w
$maxX = 0
$minY = $h
$maxY = 0

for ($y = 0; $y -lt $h; $y += 4) {
    for ($x = 0; $x -lt $w; $x += 4) {
        $c = $src.GetPixel($x, $y)
        # Check if pixel is white or near-white (R > 50 or G > 50 or B > 50)
        if ($c.R -gt 50 -or $c.G -gt 50 -or $c.B -gt 50) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Bounding box: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"
$markW = $maxX - $minX
$markH = $maxY - $minY
Write-Host "Mark dimensions: $markW x $markH"

# Create tight crop with small padding (e.g. 5% padding)
$pad = [int]($markW * 0.04)
$cropX = [Math]::Max(0, $minX - $pad)
$cropY = [Math]::Max(0, $minY - $pad)
$cropW = [Math]::Min($w - $cropX, $markW + ($pad * 2))
$cropH = [Math]::Min($h - $cropY, $markH + ($pad * 2))

# Make it square
$cropDim = [Math]::Max($cropW, $cropH)
$deltaX = [int](($cropDim - $cropW) / 2)
$deltaY = [int](($cropDim - $cropH) / 2)
$cropX = [Math]::Max(0, $cropX - $deltaX)
$cropY = [Math]::Max(0, $cropY - $deltaY)
$cropW = [Math]::Min($w - $cropX, $cropDim)
$cropH = [Math]::Min($h - $cropY, $cropDim)

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$cropped = $src.Clone($rect, $src.PixelFormat)

# Save tight cropped version
$tightPath = Join-Path (Get-Location) "public/assets/logo/logo-cropped.png"
$cropped.Save($tightPath, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved tight cropped logo to: $tightPath"

# Also create high-res favicons and icons: 512x512, 192x192, 64x64, 32x32
$sizes = @(512, 192, 64, 32)
foreach ($sz in $sizes) {
    $resized = New-Object System.Drawing.Bitmap($sz, $sz)
    $g = [System.Drawing.Graphics]::FromImage($resized)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($cropped, 0, 0, $sz, $sz)
    $g.Dispose()

    $iconPath = Join-Path (Get-Location) "public/icon-$sz.png"
    $resized.Save($iconPath, [System.Drawing.Imaging.ImageFormat]::Png)
    if ($sz -eq 32) {
        $favPath = Join-Path (Get-Location) "public/favicon.ico"
        $resized.Save($favPath, [System.Drawing.Imaging.ImageFormat]::Png)
        $favPng = Join-Path (Get-Location) "public/favicon.png"
        $resized.Save($favPng, [System.Drawing.Imaging.ImageFormat]::Png)
        # Also save to app/icon.png
        $appIcon = Join-Path (Get-Location) "app/icon.png"
        $resized.Save($appIcon, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    if ($sz -eq 192) {
        $appleIcon = Join-Path (Get-Location) "public/apple-touch-icon.png"
        $resized.Save($appleIcon, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    $resized.Dispose()
}

$cropped.Dispose()
$src.Dispose()
Write-Host "Logo and favicons generated successfully!"
