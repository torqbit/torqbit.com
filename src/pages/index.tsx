import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import PageLayout from "@theme/PageLayout"

import juCss from "../css/index/jumbotron.module.css"
import seCss from "../css/section.module.css"

import React from "react"



const Top = () => {
  return (
    <section className={clsx(seCss.section, juCss["hero-section"])}>
      <div className={clsx(juCss.jumbotron)}>
        <div className={juCss.jub__left__content}>
          <div className={juCss.jumbotron__title}>
            Build your tomorrow
            <br />
            <span className="text__bg__gradient"> with Torqbit</span>
          </div>
          <div className={juCss.jumbotron__description}>
            The rigorous software training camp run by hard core coders.
          </div>

          <div className={clsx(juCss.jub__action__btns)}>
            <a href="#" className={juCss.view__repo__btn}>
              Launching soon
              <svg
                width={22}
                height={22}
                opacity=".5"
                style={{ marginLeft: "12px" }}
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="#fff"
                  d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                ></path>
              </svg>
            </a>
            

            <br />
          </div>
        </div>
        <div className={juCss.jub__right__content}>
          {/* <img src="/static/img/coder.jpeg" alt="" /> */}
        </div>
      </div>
    </section>
  )
}



const Home = () => {
  const { siteConfig } = useDocusaurusContext()
  const title = "Torqbit"

  return (
    <PageLayout
      canonical=""
      description={siteConfig.customFields.description}
      title={title}
    >
      <Top />

     
    </PageLayout>
  )
}

export default Home
