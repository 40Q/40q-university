<header class="header">
    <div class="py-2.5 bg-primary-dark">
        <div class="max-md:px-4 max-xl:px-10 max-w-temp-container mx-auto flex items-center justify-between">
            <div class="flex flex-col md:flex-row gap-1 md:gap-6">
                @if($universityEmail)
                    <div class="university-email flex items-center gap-1 text-back-light">
                        <div class="p-0.5 [&>svg]:w-5 [&>svg]:h-5">
                            @include('partials.svg.email')
                        </div>
                        <p class="text-xs text-back-light font-light">
                            {!! $universityEmail !!}
                        </p>
                    </div>
                @endif
                @if($universityAddress)
                    <div class="university-adress flex items-center gap-1 text-back-light">
                        <div class="p-0.5 [&>svg]:w-5 [&>svg]:h-5">
                            @include('partials.svg.pin')
                        </div>
                        <p class="text-xs text-back-light font-light">
                            {!! $universityAddress !!}
                        </p>
                    </div>
                @endif
            </div>
            @if($socialMedia)
                <div class="flex gap-1.5">
                    @foreach($socialMedia as $item)
                        <a class="p-0.5 [&>svg]:w-5 [&>svg]:h-5 text-back-light" href="{{ $item['link_to_media'] }}">
                            @include('partials.svg.' . $item['media'])
                        </a>
                    @endforeach
                </div>
            @endif
        </div>
    </div>
    <div class="bg-white py-3 justify-between">
        <div class="max-md:px-4 max-xl:px-10 max-w-temp-container mx-auto flex gap-6 md:gap-8 items-center justify-between">
            @if($universityLogo)
                <a class="w-44" href="{{ home_url('/') }}">
                    <img src="{{ $universityLogo['url'] }}" alt="{{ $universityLogo['alt'] }}">
                </a>
            @endif
    
            <div class="menu hidden lg:flex items-center gap-2">
                @if (has_nav_menu('primary_navigation'))
                    <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
                        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav flex text-text items-center gap-5 [&>li]:xl:px-1.5 [&>li]:text-lg', 'echo' => false]) !!}
                    </nav>
                @endif
                <div class="text-text p-0.5 [&>svg]:w-5 [&>svg]:h-5">
                    @include('partials.svg.search')
                </div>
            </div>
    
            <div class="flex gap-4 md:gap-10 items-center">
                @if ($cta)
                    <x-button :text="$cta['title']" :href="$cta['url']" />
                @endif
    
                <div class="open-menu flex flex-shrink-0 flex-col gap-1 lg:hidden">
                    <div class="w-6 h-0.5 bg-primary-dark"></div>
                    <div class="w-6 h-0.5 bg-primary-dark"></div>
                    <div class="w-6 h-0.5 bg-primary-dark"></div>
                </div>
            </div>
        </div>
    </div>
</header>
