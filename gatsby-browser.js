/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onRouteUpdate = () => {
  const modalScripts = document.createElement("script")
  modalScripts.id = "modalScripts"
  modalScripts.src = "/scripts/modal.js"
  modalScripts.async = true
  document.body.appendChild(modalScripts)
}
