/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/fe/main.js":
/*!*********************************!*\
  !*** ./resources/js/fe/main.js ***!
  \*********************************/
/***/ (() => {

eval("// -----------------------------------------------------------------------------\n// This file contains all main js.\n// -----------------------------------------------------------------------------\n$(document).ready(function () {\n  /********************************/\n\n  /*responsive top cover*/\n\n  /********************************/\n  var hgt_window = $(window).height();\n  var hg_header = $('#header-wtf').height();\n  var count_hgt = hgt_window - hg_header;\n  $('#bg-cover-top').css('height', count_hgt);\n  $('.ct-cover-top').css('height', count_hgt);\n  $('#content-fe-wtf').css('margin-top', hg_header);\n  var ct_tops = $('#ct-tops').height();\n  var count_ct_tops = ct_tops + 400;\n\n  if (window.matchMedia('(max-height: ' + count_ct_tops + 'px)').matches) {\n    $('#ct-tops').css({\n      'position': 'unset',\n      'transform': 'unset',\n      'margin': 'auto 20px',\n      'display': 'block',\n      'width': 'calc(100% - 40px)',\n      'padding-top': '100px'\n    });\n    $('#bg-cover-top').css({\n      'height': ct_tops + 350\n    });\n  }\n  /********************************/\n\n  /*menu scrollbar*/\n\n  /********************************/\n\n\n  $(\"#arrw-wtf-left\").click(function () {\n    var leftPos = $('#wtf-tab').scrollLeft();\n    $(\".dv-scrbamn-hotItems\").animate({\n      scrollLeft: leftPos - 200\n    }, 800);\n  });\n  $(\"#arrw-wtf-right\").click(function () {\n    var leftPos = $('#wtf-tab').scrollLeft();\n    $(\".dv-scrbamn-hotItems\").animate({\n      scrollLeft: leftPos + 200\n    }, 800);\n  });\n  /********************************/\n\n  /*show & hide arrow menu tab*/\n\n  /********************************/\n\n  var jumlahmenu = 0;\n  $('#wtf-tab li').each(function (index) {\n    jumlahmenu += parseInt($(this).width());\n  });\n  var widthTab = $('.scroll-menu-tab').width();\n\n  if (jumlahmenu > widthTab) {\n    console.log('masuk');\n    $('.scroll-menu-tab').mouseover(function () {\n      $('.arrow-scrl').css('visibility', 'visible');\n    }).mouseout(function () {\n      $('.arrow-scrl').css('visibility', 'hidden');\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmUvbWFpbi5qcz9hOGFiIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaGd0X3dpbmRvdyIsIndpbmRvdyIsImhlaWdodCIsImhnX2hlYWRlciIsImNvdW50X2hndCIsImNzcyIsImN0X3RvcHMiLCJjb3VudF9jdF90b3BzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjbGljayIsImxlZnRQb3MiLCJzY3JvbGxMZWZ0IiwiYW5pbWF0ZSIsImp1bWxhaG1lbnUiLCJlYWNoIiwiaW5kZXgiLCJwYXJzZUludCIsIndpZHRoIiwid2lkdGhUYWIiLCJjb25zb2xlIiwibG9nIiwibW91c2VvdmVyIiwibW91c2VvdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekI7O0FBQ0E7O0FBQ0E7QUFDQSxNQUFJQyxVQUFVLEdBQUdILENBQUMsQ0FBQ0ksTUFBRCxDQUFELENBQVVDLE1BQVYsRUFBakI7QUFDQSxNQUFJQyxTQUFTLEdBQUdOLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJLLE1BQWpCLEVBQWhCO0FBQ0EsTUFBSUUsU0FBUyxHQUFHSixVQUFVLEdBQUdHLFNBQTdCO0FBQ0FOLEVBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLEdBQW5CLENBQXVCLFFBQXZCLEVBQWlDRCxTQUFqQztBQUNBUCxFQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CUSxHQUFuQixDQUF1QixRQUF2QixFQUFpQ0QsU0FBakM7QUFDQVAsRUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJRLEdBQXJCLENBQXlCLFlBQXpCLEVBQXVDRixTQUF2QztBQUVBLE1BQUlHLE9BQU8sR0FBR1QsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjSyxNQUFkLEVBQWQ7QUFDQSxNQUFJSyxhQUFhLEdBQUdELE9BQU8sR0FBRyxHQUE5Qjs7QUFDQSxNQUFJTCxNQUFNLENBQUNPLFVBQVAsQ0FBa0Isa0JBQWdCRCxhQUFoQixHQUE4QixLQUFoRCxFQUF1REUsT0FBM0QsRUFBb0U7QUFDaEVaLElBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY1EsR0FBZCxDQUFrQjtBQUNkLGtCQUFhLE9BREM7QUFFZCxtQkFBYyxPQUZBO0FBR2QsZ0JBQVcsV0FIRztBQUlkLGlCQUFZLE9BSkU7QUFLZCxlQUFVLG1CQUxJO0FBTWQscUJBQWdCO0FBTkYsS0FBbEI7QUFRQVIsSUFBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlEsR0FBbkIsQ0FBdUI7QUFDbkIsZ0JBQVdDLE9BQU8sR0FBRztBQURGLEtBQXZCO0FBR0g7QUFFRDs7QUFDQTs7QUFDQTs7O0FBQ0FULEVBQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CYSxLQUFwQixDQUEwQixZQUFZO0FBQ2xDLFFBQUlDLE9BQU8sR0FBR2QsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZSxVQUFkLEVBQWQ7QUFDQWYsSUFBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJnQixPQUExQixDQUFrQztBQUM5QkQsTUFBQUEsVUFBVSxFQUFFRCxPQUFPLEdBQUc7QUFEUSxLQUFsQyxFQUVHLEdBRkg7QUFHSCxHQUxEO0FBT0FkLEVBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCYSxLQUFyQixDQUEyQixZQUFZO0FBQ25DLFFBQUlDLE9BQU8sR0FBR2QsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZSxVQUFkLEVBQWQ7QUFDQWYsSUFBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJnQixPQUExQixDQUFrQztBQUM5QkQsTUFBQUEsVUFBVSxFQUFFRCxPQUFPLEdBQUc7QUFEUSxLQUFsQyxFQUVHLEdBRkg7QUFHSCxHQUxEO0FBT0E7O0FBQ0E7O0FBQ0E7O0FBQ0EsTUFBSUcsVUFBVSxHQUFHLENBQWpCO0FBQ0FqQixFQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCa0IsSUFBakIsQ0FBc0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNsQ0YsSUFBQUEsVUFBVSxJQUFJRyxRQUFRLENBQUNwQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxQixLQUFSLEVBQUQsQ0FBdEI7QUFDSCxHQUZEO0FBR0EsTUFBSUMsUUFBUSxHQUFHdEIsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JxQixLQUF0QixFQUFmOztBQUVBLE1BQUdKLFVBQVUsR0FBR0ssUUFBaEIsRUFBeUI7QUFDckJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQXhCLElBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQ0t5QixTQURMLENBQ2UsWUFBVTtBQUNqQnpCLE1BQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJRLEdBQWpCLENBQXFCLFlBQXJCLEVBQW1DLFNBQW5DO0FBQ0gsS0FITCxFQUlLa0IsUUFKTCxDQUljLFlBQVU7QUFDaEIxQixNQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCUSxHQUFqQixDQUFxQixZQUFyQixFQUFtQyxRQUFuQztBQUNILEtBTkw7QUFPSDtBQUNKLENBL0REIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCBtYWluIGpzLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKnJlc3BvbnNpdmUgdG9wIGNvdmVyKi9cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHZhciBoZ3Rfd2luZG93ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgdmFyIGhnX2hlYWRlciA9ICQoJyNoZWFkZXItd3RmJykuaGVpZ2h0KCk7XHJcbiAgICB2YXIgY291bnRfaGd0ID0gaGd0X3dpbmRvdyAtIGhnX2hlYWRlcjtcclxuICAgICQoJyNiZy1jb3Zlci10b3AnKS5jc3MoJ2hlaWdodCcsIGNvdW50X2hndCk7XHJcbiAgICAkKCcuY3QtY292ZXItdG9wJykuY3NzKCdoZWlnaHQnLCBjb3VudF9oZ3QpO1xyXG4gICAgJCgnI2NvbnRlbnQtZmUtd3RmJykuY3NzKCdtYXJnaW4tdG9wJywgaGdfaGVhZGVyKTtcclxuXHJcbiAgICB2YXIgY3RfdG9wcyA9ICQoJyNjdC10b3BzJykuaGVpZ2h0KCk7XHJcbiAgICB2YXIgY291bnRfY3RfdG9wcyA9IGN0X3RvcHMgKyA0MDA7XHJcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtaGVpZ2h0OiAnK2NvdW50X2N0X3RvcHMrJ3B4KScpLm1hdGNoZXMpIHtcclxuICAgICAgICAkKCcjY3QtdG9wcycpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbicgOiAndW5zZXQnLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJyA6ICd1bnNldCcsXHJcbiAgICAgICAgICAgICdtYXJnaW4nIDogJ2F1dG8gMjBweCcsXHJcbiAgICAgICAgICAgICdkaXNwbGF5JyA6ICdibG9jaycsXHJcbiAgICAgICAgICAgICd3aWR0aCcgOiAnY2FsYygxMDAlIC0gNDBweCknLFxyXG4gICAgICAgICAgICAncGFkZGluZy10b3AnIDogJzEwMHB4JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjYmctY292ZXItdG9wJykuY3NzKHtcclxuICAgICAgICAgICAgJ2hlaWdodCcgOiBjdF90b3BzICsgMzUwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyptZW51IHNjcm9sbGJhciovXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAkKFwiI2Fycnctd3RmLWxlZnRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsZWZ0UG9zID0gJCgnI3d0Zi10YWInKS5zY3JvbGxMZWZ0KCk7XHJcbiAgICAgICAgJChcIi5kdi1zY3JiYW1uLWhvdEl0ZW1zXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxMZWZ0OiBsZWZ0UG9zIC0gMjAwXHJcbiAgICAgICAgfSwgODAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjYXJydy13dGYtcmlnaHRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsZWZ0UG9zID0gJCgnI3d0Zi10YWInKS5zY3JvbGxMZWZ0KCk7XHJcbiAgICAgICAgJChcIi5kdi1zY3JiYW1uLWhvdEl0ZW1zXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxMZWZ0OiBsZWZ0UG9zICsgMjAwXHJcbiAgICAgICAgfSwgODAwKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKnNob3cgJiBoaWRlIGFycm93IG1lbnUgdGFiKi9cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHZhciBqdW1sYWhtZW51ID0gMDtcclxuICAgICQoJyN3dGYtdGFiIGxpJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgIGp1bWxhaG1lbnUgKz0gcGFyc2VJbnQoJCh0aGlzKS53aWR0aCgpKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIHdpZHRoVGFiID0gJCgnLnNjcm9sbC1tZW51LXRhYicpLndpZHRoKCk7XHJcbiAgICBcclxuICAgIGlmKGp1bWxhaG1lbnUgPiB3aWR0aFRhYil7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21hc3VrJyk7XHJcbiAgICAgICAgJCgnLnNjcm9sbC1tZW51LXRhYicpXHJcbiAgICAgICAgICAgIC5tb3VzZW92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQoJy5hcnJvdy1zY3JsJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXJyb3ctc2NybCcpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pOyJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZmUvbWFpbi5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/fe/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/fe/main.js"]();
/******/ 	
/******/ })()
;