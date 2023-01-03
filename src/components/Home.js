import React from 'react'

const Home = () => {
    return (
        <div className='container my-2'>
            <div>
                <h3 >Latest Courses</h3>
                <div className="row my-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="card" style={{ "width": "17rem" }}>
                            <img src="logo512.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <a className="h4" href='#'>Course Title</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card" style={{ "width": "17rem" }}>
                            <img src="logo512.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <a className="h4" href='#'>Course Title</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card" style={{ "width": "17rem" }}>
                            <img src="logo512.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <a className="h4" href='#'>Course Title</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card" style={{ "width": "17rem" }}>
                            <img src="logo512.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <a className="h4" href='#'>Course Title</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-2'>
                    <h3>Popular Courses</h3>
                    <div className="row my-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="card" style={{ "width": "17rem" }}>
                                <img src="logo512.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <a className="h4" href='#'>Course Title</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card" style={{ "width": "17rem" }}>
                                <img src="logo512.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <a className="h4" href='#'>Course Title</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card" style={{ "width": "17rem" }}>
                                <img src="logo512.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <a className="h4" href='#'>Course Title</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card" style={{ "width": "17rem" }}>
                                <img src="logo512.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <a className="h4" href='#'>Course Title</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home