import nvidia from '../assets/images/png/nvidiaImg.png'
import { Stocksarr } from './common/Helper'

const Stocks = () => {
    return (
        <>
            <section className=' px-md-3 pb-5 mb-lg-5'>
                <div className=' trending_container mx-auto py-5 mb-5'>
                    <h2 data-aos="zoom-in" className=' fs-xl fw-bold text-white ff-inter text-center mb-5 mt-4 lh-57'>Top 7 AI Stocks</h2>
                    <div className="container-lg max-w-container mb-lg-5 pb-4">
                        <div data-aos="fade-up" className=' nvidia_card w-100 bg-white br_16 p-3'>
                            <div className=' row justify-content-between'>
                                <div className="col-lg-6 col-md-7">
                                    <p className=' fs-lg color-black1 text-center text-md-start ff-inter fw-bold mb-2 '>Nvidia - AI GPU 1 year 228% Growth </p>
                                    <p className=' fs-sm color-black2 text-center text-md-start fw-normal ff-inter lh-25 pb-4 mb-md-3 mb-0 '>NVIDIA Corporation, a powerhouse in GPU technology and AI innovation, offers investors compelling opportunities. With dominance in gaming and data center markets, </p>
                                    <div className='btn_stocks mx-auto mt-md-2 mx-md-0'>
                                        <div className='bg_btn_stock'>
                                            <button className=' btn-read' >Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-5 text-center">
                                    <img src={nvidia} alt="img" className=' w-100 max_w_355 mt-4 mt-md-0' />
                                </div>
                            </div>
                        </div>

                        <div className="row pb-2">
                            {Stocksarr.map((obj, index) => {
                                return (
                                    <div data-aos="zoom-in" className=' col-lg-4  col-sm-6 mt-4'>
                                        <div className=' bg-white card-stock h-100 br_16 p-3 d-flex min_h_228 flex-column justify-content-between'>
                                            <div className=' d-flex flex-column'>
                                                <p className=' ff-inter fw-bold fs-sm mb-2 color-black1'>{obj.title}</p>
                                                <p className=' ff-inter fw-normal m-0 fs-sm lh-25 color-black2'>{obj.description}</p>
                                            </div>
                                            <div className=' d-flex align-items-center justify-content-between'>
                                                <a href="#" className=' color_grednt readmore_line fw-bold fs-sm lh-24'>Read More</a>
                                                <img src={obj.img} alt="img-logos" className=' max_w_111' />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stocks