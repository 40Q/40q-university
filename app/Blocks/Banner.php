<?php

namespace App\Blocks;

use BlockHandler\Contracts\BlockHandler;

class Banner implements BlockHandler
{
    public function __invoke($block_content, $block)
    {
        return view('blocks.banner', [
            'eyebrow' => $block['attrs']['eyebrow'] ?? '',
            'heading' => $block['attrs']['heading'] ?? '',
            'text' => $block['attrs']['text'] ?? '',
            'showEyebrow' => $block['attrs']['showEyebrow'] ?? true,
            'showHeading' => $block['attrs']['showHeading'] ?? true,
            'showText' => $block['attrs']['showText'] ?? true,
            'id' => $block['attrs']['id'] ?? '',
            'alt' => $block['attrs']['alt'] ?? '',
            'buttonText' => $block['attrs']['buttonText'] ?? '',
            'buttonHref' => $block['attrs']['buttonHref'] ?? '',
        ]);
    }
}
