<section class="quote-block py-17 md:pt-23 md:pb-16 {{ $darkMode ? 'bg-primary-dark' : 'bg-white' }}">
  <div class="container">
    <div class="w-full flex flex-col md:flex-row gap-8 md:gap-2 lg:gap-8 justify-center">
      <div class="flex flex-col gap-4 md:pr-10 md:pt-2.5 md:w-5/12 flex-shrink-0 box-border md:items-end">
        @if($heading)
          <h3 class="heading text-2xl font-bold lg:pr-5 tracking-wide relative {{ $darkMode ? 'text-auxiliar lg:after:bg-auxiliar' : 'text-primary-dark lg:after:bg-primary-dark' }} lg:after:rounded-lg lg:after:content-[''] lg:after:w-3.5 lg:after:h-3.5 lg:after:-right-2.5 lg:after:bg-cover lg:after:bg-center lg:after:top-1.5 lg:after:absolute">
            {!! $heading !!}
          </h3>
        @endif
        @if($text)
          <p class="text-xl md:text-end !leading-comfort {{ $darkMode ? 'text-white' : 'text-text' }}">
            {!! $text !!}
          </p>
        @endif
      </div>
      <div class="flex w-full">
        @if($quote)
          <p class="text-4xl md:text-5xl font-light md:pl-10 lg:pl-16 tracking-wide md:tracking-wider !leading-tighter {{ $darkMode ? 'text-white' : 'text-text' }} md:border-l-auxiliar md:border-l md:border-solid">
            {!! $quote !!}
            @if($author)
              <span class="text-4xl md:text-5xl {{ $darkMode ? 'text-auxiliar' : 'text-primary' }}">
                {!! $author !!}
              </span>
            @endif
          </p>
        @endif
      </div>
    </div>
  </div>
</section>