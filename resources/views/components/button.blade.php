<a href="{{ $href }}" class="flex gap-4 lg:inline-block p-4 leading-none rounded text-sm uppercase text-white bg-primary border border-primary-dark border-solid {{ $type }}">
    {{ $text }}

    <div class="lg:hidden">
        @include('partials.svg.arrow')
    </div>
</a>