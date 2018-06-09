<?php
$fileName = "voxet_newtest_voxet_gold@@";
        if (file_exists($fileName)) {
            $hex = file_get_contents($fileName);
            $dec = unpack("g*", $hex);
            echo $dec[0];
        }
?>