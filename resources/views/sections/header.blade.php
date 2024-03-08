<header class="{{ $containerClasses }}">
    <div class="py-2.5 bg-primary-dark">
        <div>
            @if($universityEmail)
                <div class="university-email bg-white flex gap-1">
                    @include('partials.svg.email')
                    <p>
                        {!! $universityEmail !!}
                    </p>
                </div>
            @endif
            @if($universityAdress)
                <div class="university-adress bg-white flex gap-1">
                    @include('partials.svg.pin')
                    <p>
                        {!! $universityAddress !!}
                    </p>
                </div>
            @endif
        </div>
    </div>
    @if($socialMedia)
        <div class="items-center hidden lg:flex gap-7 lg:gap-10">
            @foreach($socialMedia as $item)
                <a class="w-6 h-6 social-media-item lg:w-9 lg:h-9 text-green-media" href="{{ $item['link_to_media'] }}">
                    @include('components.social-media.' . $item['media'])
                </a>
            @endforeach
        </div>
    @endif
    <div class="{{ $containerInnerClasses }}">
        <a class="py-3 font-bold text-lg block" href="{{ home_url('/') }}">
            {!! $siteName !!}
        </a>

        @if (has_nav_menu('primary_navigation'))
            <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
                {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
            </nav>
        @endif
    </div>
</header>
