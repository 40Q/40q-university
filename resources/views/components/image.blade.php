@if ($container)
    <div
        class="w-full h-0 relative pb-[100%] lg:pb-[60%] [&>img]:w-full [&>img]:object-cover [&>img]:object-center [&>img]:absolute [&>img]:h-full [&>img]:max-w-[100%] [&>img]:left-0 [&>img]:top-0{{ $containerClass ? ' ' . $containerClass : '' }}">
@endif

{!! $image !!}

@if ($container)
    </div>
@endif