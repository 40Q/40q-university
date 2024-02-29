<?php

namespace App\Providers;

use BlockHandler\Facades\BlockHandler;
use Illuminate\Support\ServiceProvider;

class BlocksServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {

        add_filter('render_block', function ($block_content, $block) {
            try {
                $factory = app(BlockHandler::class);
                $handlerClass = $factory->getHandler($block['blockName']);

                if ($handlerClass) {
                    $handlerInstance = new $handlerClass();
                    return $handlerInstance($block_content, $block);
                }
            } catch (\Exception $e) {
                error_log($e->getMessage());
            }

            return $block_content;
        }, 10, 2);

        add_filter('allowed_block_types', function ($allowed_blocks) {
            $screen = get_current_screen();

            if ($screen->post_type === 'page') {
                $by40qBlocksFactory = app(BlockHandler::class);
                $by40qBlocks = $by40qBlocksFactory->getBlocks();
                $by40qBlockKeys = array_keys($by40qBlocks);

                return array_merge($by40qBlockKeys, ['core/paragraph', 'core/list', 'core/list-item', 'core/group']);
            }

            return $allowed_blocks;
        });

        add_filter('block_categories_all', function ($categories) {
            $custom_categories = [
                [
                    'slug'  => '40q',
                    'title' => '40Q Blocks'
                ],
                [
                    'slug'  => 'presentational',
                    'title' => 'Presentational'
                ]
            ];

            return array_merge($custom_categories, $categories);
        });
    }
}
