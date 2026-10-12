Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile((Get-Item "public/laurel_screenshot.png").FullName)

function Crop-Transparent($srcBmp, $x1, $y1, $w, $h, $destPath) {
    $out = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    for ($y = 0; $y -lt $h; $y++) {
        for ($x = 0; $x -lt $w; $x++) {
            $c = $srcBmp.GetPixel($x1 + $x, $y1 + $y)
            $lum = ($c.R + $c.G + $c.B) / 3.0
            if ($lum -ge 235) {
                $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            } elseif ($lum -gt 210) {
                $alpha = [int]((235 - $lum) / 25.0 * 255)
                $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb([Math]::Min(255, [Math]::Max(0, $alpha)), $c.R, $c.G, $c.B))
            } else {
                $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $c.R, $c.G, $c.B))
            }
        }
    }
    $out.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $out.Dispose()
    Write-Host "Successfully saved $destPath"
}

# Left Laurel: X=786, Y=487, W=93, H=148
Crop-Transparent $bmp 786 487 93 148 "public/laurel-left.png"

# Right Laurel: X=1045, Y=487, W=97, H=148
Crop-Transparent $bmp 1045 487 97 148 "public/laurel-right.png"

$bmp.Dispose()
