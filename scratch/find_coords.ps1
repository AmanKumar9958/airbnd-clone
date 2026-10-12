Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('C:\Users\amanc\.gemini\antigravity-ide\brain\ed7c18f1-f66c-4d35-a8c0-f654b5f76828\.user_uploaded\media_1791824812466.png')
Write-Host "Image Size: $($img.Width) x $($img.Height)"
$bmp = New-Object System.Drawing.Bitmap $img
$left = 1000
$right = 0
$top = 1000
$bottom = 0

for ($y = 40; $y -lt 360; $y++) {
    for ($x = 100; $x -lt 920; $x++) {
        $color = $bmp.GetPixel($x, $y)
        # Background is pure white #ffffff (255,255,255)
        if ($color.R -lt 250 -or $color.G -lt 250 -or $color.B -lt 250) {
            if ($x -lt $left) { $left = $x }
            if ($x -gt $right) { $right = $x }
            if ($y -lt $top) { $top = $y }
            if ($y -gt $bottom) { $bottom = $y }
        }
    }
}

Write-Host "Gallery Bounding Box: Left=$left, Right=$right, Top=$top, Bottom=$bottom"
$w = $right - $left + 1
$h = $bottom - $top + 1
Write-Host "Gallery Width: $w, Height: $h"
Write-Host "Height to Width ratio: $([math]::Round($h / $w, 4))"
$img.Dispose()
$bmp.Dispose()
