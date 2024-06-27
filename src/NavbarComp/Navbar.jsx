import React, { useState } from 'react';

const Navbar = () => {
    const [sigIn, setSignIn] = useState(true);

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" href="#">INVICAT</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li class="nav-item">
                                <a class="fs-6 mx-3 fw-bold nav-link active text-dark" aria-current="page" href="#">Home
                                    <i class="fa-solid fa-house ms-1"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="fs-6 mx-3 fw-bold nav-link text-dark" href="#">Category <i class="fa-solid fa-table ms-1"></i></a>
                            </li>

                            {
                                sigIn && <>
                                    <li class="nav-item">
                                        <a class="fs-6 mx-3 fw-bold nav-link text-dark" aria-current="page" href="#">Favourte <i class="fa-solid fa-heart ms-1"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="fs-6 mx-3 fw-bold nav-link text-dark" href="#">Watchlist<i class="fa-solid ms-2 fa-bookmark"></i></a>
                                    </li>
                                </>
                            }
                        </ul>
                        <form class="d-flex">
                            <input class="form-control border-success border-top-0 border-start-0 border-end-0 rounded-0 shadow-none bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn border-success border-top-0 border-start-0 border-end-0 rounded-0 shadow-none" type="submit">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>

                            {
                                sigIn == true ? <>
                                    <button class="btn btn-outline-danger ms-4" type="submit">
                                        <i class="fa-solid fa-user"></i>
                                    </button>
                                </> : <>
                                    <button class="btn btn-outline-success ms-4" type="submit">
                                        Sign In
                                    </button>
                                </>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;



// 