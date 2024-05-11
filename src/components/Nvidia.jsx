import invest from '../assets/images/png/investerImg.png'
import invest2 from '../assets/images/png/imgCncb.png'
import invest3 from '../assets/images/png/yahooImg.png'
import Primarybutton from './common/Primarybutton'

const Nvidia = () => {
    return (
        <>
            <section className=' py-md-5 py-sm-1 px-1 px-sm-0'>
                <div className=' container-md max-w-container pt-5 my-md-4'>
                    <h1 data-aos="fade-up" className=' color-black1 fs-xl ff-inter mb-1 mt-2 text-center fw-bold lh-57'>Why Invest in Nvidia Stock</h1>
                    <div className='row py-md-5 py-4 mt-2 justify-content-center'>
                        <div data-aos="fade-up" className="col_xlg_4 col-md-6 col-sm-9">
                            <div className=' card1_sec1 d-flex flex-column justify-content-between h-100'>
                                <p className=' color-black1 fw-normal lh-30 ff-inter fst-italic fs-md'> <span className='fw-bold'>Nvidia stock</span> shows exceptional technical strength and boasts a best-possible score of 99 on both its Composite Rating and EPS Rating. Its Relative Strength Rating of 98 also shows that its outperforming.</p>
                                <img src={invest} alt="img" />
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col_xlg_4 col-md-6 col-sm-9 mt-4 mt-md-0">
                            <div className=' card1_sec1 d-flex flex-column position-relative justify-content-between h-100'>
                                <p className=' color-black1 fw-normal lh-30 ff-inter fst-italic fs-md'>  Patient Capital Management, a value investing firm, released its “Patient Capital Opportunity Equity Strategy” first quarter 2024 investor letter. It featured stocks like <span className='fw-bold'>NVIDIA</span> Corporation (NASDAQ:NVDA) in its Q1 2024 investor letter.</p>
                                <img src={invest3} alt="img" className=' max_w_270 position-absolute bottom-0 start-0' />
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col_xlg_4 col-md-6 col-sm-9 mt-4 mt_xlg_0">
                            <div className=' card1_sec1 px-3 d-flex flex-column justify-content-between h-100'>
                                <p className=' color-black1 fw-normal lh-30 ff-inter fst-italic fs-md2'>SoftBank will reportedly invest nearly $1 billion in AI push, tapping
                                    <span className=' fw-bold'> Nvidia’s chips</span></p>
                                <img src={invest2} alt="img" className='max_w_219' />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className=' d-flex justify-content-center align-items-center gap-3 pb-3 pt-2 mt-1'>
                        <p className=' color-black1 ff-inter fw-normal fs-md lh-25 m-0 me-2 '>and a 100s of reasons</p>
                        <Primarybutton text="Invest Now" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nvidia