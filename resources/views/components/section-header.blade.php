<div class="{{ $containerClasses }}">
    @if ($showEyebrow && !empty($eyebrow))
        <p class="text-sm lg:text-base mb-3 lg:mb-4 text-back-light {{ $eyebrowClasses }}">{{ $eyebrow }}</p>
    @endif

    @if ($showHeading && !empty($heading))
        <h2 class="text-4xl leading-10.5 lg:text-5xl lg:leading-14 mb-3 lg:mb-4 text-back-light {{ $headingClasses }}">{{ $heading }}</h2>
    @endif

    @if ($showText && !empty($text))
        <div class="text-sm tracking-tight lg:text-base !lg:leading-7.5  text-back-light {{ $textClasses }}">{{ $text }}</div>
    @endif
</div>