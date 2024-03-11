<?php

namespace App\Blocks;

use BlockHandler\Contracts\BlockHandler;

class Stats implements BlockHandler
{
    public function __invoke($block_content, $block)
    {   
        return view('blocks.stats', [
            'stats' => $block['attrs']['stats'] ?? [],
        ]);
    }
}
