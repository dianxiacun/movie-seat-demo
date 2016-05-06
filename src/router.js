import $ from 'zepto'

export default function (router) {
  router.map({
    '*': {
      component (resolve) {
        require(['./components/Movie'], resolve)
      }
    },
    '/': {
      component (resolve) {
        require(['./components/Movie'], resolve)
      }
    },
    '/moviedetail': {
      component (resolve) {
        require(['./components/MovieDetail'], resolve)
      }
    },
    '/cinemaschedule': {
      component (resolve) {
        require(['./components/CinemaSchedule'], resolve)
      }
    },
    '/city': {
      component (resolve) {
        require(['./components/City'], resolve)
      }
    },
    '/confirmorder': {
      component (resolve) {
        require(['./components/ConfirmOrder'], resolve)
      }
    },
    '/payment': {
      component (resolve) {
        require(['./components/Payment'], resolve)
      }
    },
    '/seat': {
      component (resolve) {
        require(['./components/Seat'], resolve)
      }
    }
  })

  // router.beforeEach(({to, from, next}) => {
  //   let toPath = to.path
  //   let fromPath = from.path
  //   console.log('to: ' + toPath + ' from: ' + fromPath)
  //   if (toPath.replace(/[^/]/g, '').length > 1) {
  //     router.app.isIndex = false
  //   }
  //   else {
  //     let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
  //     router.app.isIndex = depath ? 0 : 1
  //   }
  //   next()
  // })

  // router.afterEach(function ({to}) {
  //   console.log(`成功浏览到: ${to.path}`)
  //   $.refreshScroller()
  // })
}
