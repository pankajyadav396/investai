import men1 from '../assets/images/webp/Graphman1.webp'
import men2 from '../assets/images/webp/Graphman2.webp'
import graph from '../assets/images/webp/imgGraph1.webp'
import graph2 from '../assets/images/webp/imgGraph2.webp'
import Primarybutton from './common/Primarybutton'

const Understd = () => {
    return (
        <>
            <section className=' pt-md-5 pb-3 mt-md-5 mt-3 mb-md-5'>
                <div className=' max-w-container container-lg pt-lg-5 pb-lg-5 mb-5'>
                    <h1 className=' color-black1 fs-xl ff-inter text-center fw-bold lh-57 max_w_946 mx-auto'>Understanding Leveraged Accounts and Buying Power</h1>
                    <p className=' color-black2 fs-sm fw-normal lh-25 mb-5 text-center ff-inter max_w_946 mx-auto'>Trading with leveraged accounts in CFDs provides traders with increased buying power, enabling them to attain superior results across various markets. By amplifying potential returns and accessing additional capital, traders can capitalize on market opportunities more effectively, enhancing their overall trading performance.</p>
                    <div className=' row justify-content-center'>
                        <div data-aos="fade-up" className="col-lg-6 col-md-9 col-sm-10 mb_undrbox position-relative min_h_558">
                            <div className=' box-understd pt-3 px-3 '>
                                <div className=' d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-start mx-auto gap-3 mt-1 pt-sm-4 max_w_438'>
                                    <img src={men1} alt="img" className='img_men' />
                                    <p className=' ff-inter fw-normal text-white lh-24 m-0'> <span className=' fw-bold'>John</span> invested $250 without leverage, so his buying power was $250, and he could potentially earn up to $40.</p>
                                </div>
                            </div>
                            <img src={graph} alt="graph" className=' px-3 img_graph mt-4 mt-sm-0 mx-auto w-100' />
                        </div>
                        <div data-aos="fade-up" className="col-lg-6 col-md-9 col-sm-10 mb_undrbox position-relative min_h_558">
                            <div className=' box-understd pt-3 px-3 '>
                                <div className=' d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-start mx-auto gap-3 mt-1'>
                                    <img src={men2} alt="img" className='img_men' />
                                    <div>
                                        <p className=' ff-inter fw-normal text-white lh-24 m-0'> <span className=' fw-bold'>Mike</span> invested the same amount but utilized leverage of 1 to 30, giving him a buying power of $7,500.
                                        </p>
                                        <p className=' ff-inter fw-normal text-white lh-24 m-0'>   With this leverage, Mike achieved returns of $1200, showcasing the significant impact of leveraging on potential gains. </p>
                                    </div>
                                </div>
                            </div>
                            <img src={graph2} alt="graph" className=' px-3 img_graph mt-4 mt-sm-0 mx-auto w-100' />
                        </div>
                        <div data-aos="zoom-in" className=' text-center'>
                            <Primarybutton text="Maximize Your Profit" />
                            <p className=' color-black1 ff-inter mt-2 pt-1 mb-0'>With Leveraged Accounts and Enhanced Buying Power Today!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Understd