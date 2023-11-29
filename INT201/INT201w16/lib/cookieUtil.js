class CookieUtil {
  static get(name) {
    let cookieName = `${encodeURIComponent(name)}=`,
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = null
    if (cookieStart > -1) {
      let cookieEnd = document.cookie.indexOf(';', cookieStart)
      if (cookieEnd === -1) {
        cookieEnd = document.cookie.length
      }
      cookieValue = decodeURIComponent(
        document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
      )
    }
    return cookieValue
  }

  static set(name, value, expires) {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
    if (expires instanceof Date) {
      cookieText += `;expires=${expires.toISOString()}`
    }

    document.cookie = cookieText
  }
  //to remove existing cookies, setting the cookie again—with the same path, domain, and secure options—and set its expiration date to some time in the past.
  static unset(name) {
    //set to a blank string and the expiration date set to January 1, 1970 (the value of a Date object initialized to 0 milliseconds).
    CookieUtil.set(name, '', new Date(0)) //or max-age=0
  }
} //ending class
export { CookieUtil }
