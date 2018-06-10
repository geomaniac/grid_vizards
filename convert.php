<?php
$fileName = "hackathon_grid_property_modeled_logk@@";
        if (file_exists($fileName)) {
            $hex = file_get_contents($fileName);
            $dec = unpack("G*", $hex);
            $hex = "";
            for ($i=1;$i<=count($dec);$i++) {
                $hex .= pack("g", $dec[$i]);

            }
            //var_dump($hex);
            file_put_contents($fileName.'_le', $hex);
        }
?>