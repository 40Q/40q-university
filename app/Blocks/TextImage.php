<?php

namespace App\Blocks;

use BlockHandler\Contracts\BlockHandler;

class TextImage implements BlockHandler
{
    public function __invoke($block_content, $block)
    {
        return view('blocks.text-image', [
            'eyebrow' => $block['attrs']['eyebrow'] ?? '',
            'heading' => $block['attrs']['heading'] ?? '',
            'text' => $block['attrs']['text'] ?? '',
            'imageLeft' => $block['attrs']['imageLeft'] ?? true,
            'showEyebrow' => $block['attrs']['showEyebrow'] ?? true,
            'showHeading' => $block['attrs']['showHeading'] ?? true,
            'showText' => $block['attrs']['showText'] ?? true,
            'id' => $block['attrs']['id'] ?? '',
            'alt' => $block['attrs']['alt'] ?? '',
            'buttonText' => $block['attrs']['buttonText'] ?? '',
            'buttonHref' => $block['attrs']['buttonHref'] ?? '',
            'buttonShowArrow' => $blocks['attrs']['buttonShowArrow'] ?? true,
        ]);
    }
}


// attribute en Button -> buttonShowArrow
// Change in Buttonsidebar
// Get it in the text image composer
// pass it to frontend