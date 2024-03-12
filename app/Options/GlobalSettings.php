<?php

namespace App\Options;

use Log1x\AcfComposer\Options as Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class GlobalSettings extends Field
{
    /**
     * The option page menu name.
     *
     * @var string
     */
    public $name = 'Global Settings';

    /**
     * The option page document title.
     *
     * @var string
     */
    public $title = 'Global Settings | Options';

    /**
     * The option page field group.
     *
     * @return array
     */
    public function fields()
    {
        $globalSettings = new FieldsBuilder('global_settings');

        $globalSettings
            ->addTab('Header', [
                'placement' => 'left'
            ])
                ->addRepeater('social_media', [
                    'layout' => 'table', /* 'table' || 'row' || 'block' */
                ])
                    ->addSelect('media', [
                        'choices' => [
                            ['facebook'  => 'Facebook'],
                            ['instagram' => 'Instagram'],
                            ['twitter'   => 'Twitter'],
                            ['linkedin'    => 'Linkedin'],
                        ],
                        'default_value' => ''
                    ])
                    ->addUrl('link_to_media', [
                        'label' => 'URL Field',
                        'required' => 1,
                    ])
                ->endRepeater()
                ->addText('university_email', [
                    'default_value' => '',
                ])
                ->addText('university_address', [
                    'default_value' => '',
                ])
                ->addImage('university_logo', [
                    'return_format' => 'array', /* 'array' || 'id' || 'url' */
                    'preview_size' => 'medium',
                ])
                ->addLink('header_cta', [
                    'return_format' => 'array', /* 'array' || 'id' */
                ]);

        return $globalSettings->build();
    }
}
