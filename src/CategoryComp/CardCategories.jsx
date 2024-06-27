import React from 'react';

const CardCategories = () => {
    const image = [
        { link: "https://4kwallpapers.com/images/walls/thumbs_3t/16995.jpg", title: "Distropian" },
        { link: "https://4kwallpapers.com/images/walls/thumbs_3t/17165.jpg", title: "Action" },
        { link: "https://4kwallpapers.com/images/walls/thumbs_3t/4965.jpg", title: "Drama" },
        { link: "https://4kwallpapers.com/images/walls/thumbs_3t/10288.jpg", title: "Cartoon" },
        { link: "https://4kwallpapers.com/images/walls/thumbs_3t/10145.jpg", title: "Sci-Fi" },
        { link: "https://4kwallpapers.com/images/walls/thumbs_3t/15969.jpg", title: "Romantic" }
    ];

    return (
        <>
            {
                image.map((data, index) => (
                    <div className="col" key={index}>
                        <div className="card bg-dark text-white h-100 rounded-lg border-0" style={{boxShadow: "0 0 12px 8px rgba(0, 0, 0, 0.5)"}}>
                            <img src={data.link} className="card-img rounded-lg" alt={data.title} />
                            <div className="card-img-overlay bg-dark mt-auto mb-0 rounded-lg d-flex justify-content-center align-items-center" style={{ opacity: '0.7', height: '10%' }}>
                                <h3 className="fw-bold text-light">
                                    {data.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default CardCategories;
