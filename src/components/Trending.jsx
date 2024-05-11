import logo from '../assets/images/webp/Nvidia_logo.webp'
import imghome from '../assets/images/webp/imgTrending.webp'

const Trending = () => {
    return (
        <>
            <section className=' py-5 px-md-3'>
                <div className=' pt-lg-5 pt-4 pb-5  container trending_container'>
                    <div className=' d-flex flex-column flex-sm-row pt-4 mt-2 align-items-center pb-2 justify-content-center'>
                        <h2 data-aos="fade-up" className=' text-white pb-2 pb-sm-0 m-0 fs-xl fw-bold ff-inter'>Trending about</h2>
                        <span>< img data-aos="fade-up" src={logo} alt="logo" className='max_w_logo' /></span>
                    </div>
                    <div className=' max-w-container mx-auto mb-lg-3'>
                        <div className=' row flex-column-reverse flex-lg-row  align-items-center pt-lg-5 pt-4 pb-md-5 mb-lg-4 mt-3 justify-content-center'>
                            <div data-aos="fade-up" className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
                                <p className=' text-white ff-inter fw-bold lh-41 fs-lg'>NVIDIA Joins $110 Million Partnership to Help Universities Teach AI Skills</p>
                                <p className=' fw-normal ff-inter lh-25 text-white m-0'>The Biden Administration has announced a new $110 million AI partnership between Japan and the United States that includes an initiative to fund research through a collaboration between the University of Washington and the University of Tsukuba.</p>
                            </div>
                            <div data-aos="fade-up" className="col-lg-6 col-md-9 col-sm-10 col-12">
                                <div className=' p-1 bg-white w-100 br_16'>
                                    <img src={imghome} alt="imghome" className=' w-100 br_16' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trending