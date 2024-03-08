<?php

namespace App\Options;

use Log1x\AcfComposer\Builder;
use Log1x\AcfComposer\Options as Field;

class Example extends Field
{
    /**
     * The option page menu name.
     *
     * @var string
     */
    public $name = 'Example';

    /**
     * The option page document title.
     *
     * @var string
     */
    public $title = 'Example | Options';

    /**
     * The option page field group.
     */
    public function fields(): array
    {
        $example = Builder::make('example');

        $example
            ->addRepeater('items')
                ->addText('item')
            ->endRepeater();

        return $example->build();
    }
}
