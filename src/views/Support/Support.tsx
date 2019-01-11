import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import Btn from '../../components/Btn'

export default () => (
  <PageWrapper bg="white" title="Listen">
    <section className="section">
      <div className="py-3" />
      <div className="container containerListen">
        <div className="row">
          <div className="col">
            <h2 className="pb-4">
              Thank you for considering supporting Building One Another!
            </h2>

            <p>
              We really appreciate your partnership! Your gifts will help us
              continue to offer this podcast and build on its foundation.
            </p>

            <p>There are two ways you can participate:</p>
            <hr />

            <div className="row">
              <div className="col-md-6">
                <h3>PayPal</h3>
                <p>
                  You may send a one-time or occasional contribution through the
                  following PayPal link.
                </p>
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top"
                >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="DNPYBJD9TKEDW"
                  />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                  />
                  <img
                    alt=""
                    src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
              </div>
              <div className="col-md-6">
                <h3>Patreon</h3>
                <p>
                  If you’d rather contribute on an episode-by-episode basis,
                  check out our Patreon page.
                </p>
                <p>
                  You may designate any amount you want per episode, and limit
                  the maximum amount contributed every month.
                </p>
                <p>
                  A great feature of Patreon.com is it helps us give back to you
                  for your level of contribution.{' '}
                </p>
                <a href="https://patreon.com/buildingoneanother">
                  <Btn text="Support Us on Patreon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3" />
    </section>
  </PageWrapper>
)
