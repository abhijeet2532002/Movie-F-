import React from 'react'

const BannerCaresoul = () => {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active rounded-lg">
                        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/16995.jpg" class="d-block h-100 w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Venom</h1>
                        </div>
                    </div>
                    <div class="carousel-item rounded-lg">
                        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/17165.jpg" class="d-block h-100 w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Kalki</h1>
                        </div>
                    </div>
                    <div class="carousel-item rounded-lg">
                        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/4965.jpg" class="d-block h-100 w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Avenger</h1>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default BannerCaresoul