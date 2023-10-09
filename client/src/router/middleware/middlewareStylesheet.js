/**
 * Define our route selectable stylesheets
 *
 * @type {Object}
 */
const stylesheets = {
    home: './style/landing_page.css',
    singleRec: './style/singleRec.css',
    howItWorks: './style/how_it_works.css',
    doubleRec: './style/doubleRec.css'
  };
  
  const cssElement = document.getElementById("stylesheet");
  
  /**
   * Set the default fallback stylesheet
   * @type {[type]}
   */
  const defaultStylesheet = stylesheets.home;
  
  export default function stylesheet(to, from, next) {
    if (to.meta.stylesheet !== from.meta.stylesheet) {
      cssElement.href = stylesheets[to.meta.stylesheet] || defaultStylesheet;
    }

    if(to.meta.stylesheet === "doubleRec")
    {

      var head = document.head;
      var link = document.createElement("link");

      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = './style/singleRec.css';

      head.insertBefore(link, head.firstChild);
    }
    return next();
  }