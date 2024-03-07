<?php

namespace App\Blocks;

use BlockHandler\Contracts\BlockHandler;

class Quote implements BlockHandler
{
    public function __invoke($block_content, $block)
    {
        return view('blocks.quote', [
            'heading' => $block['attrs']['heading'] ?? '',
            'text' => $block['attrs']['text'] ?? '',
            'quote' => $block['attrs']['quote'] ?? '',
            'author' => $block['attrs']['author'] ?? '',
            'darkMode' => $block['attrs']['darkMode'] ?? false,
        ]);
    }
}
