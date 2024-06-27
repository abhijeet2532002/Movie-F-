import React from 'react'
import CardCategories from './CardCategories'

const Categories = () => {
    return (
        <>
            <div className='my-0 pt-4 pb-5'>
                <div className="container">
                    <h1 className='display-6 fw-bold text-start'>
                        <span className='text-warning me-2'>
                            <i class="fa-solid fa-folder-tree"></i>
                        </span>
                        <span className='border border-4 border-danger border-top-0 border-start-0 border-end-0 text-dark'>
                            Categories
                        </span>
                    </h1>

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5 mt-1">
                        <CardCategories />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories


//  style={{background: "linear-gradient(to right, #1a1a1a, #333333)"}}