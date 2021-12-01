// var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
// triggerTabList.forEach(function (triggerEl) {
//   var tabTrigger = new bootstrap.Tab(triggerEl)

//   triggerEl.addEventListener('click', function (event) {
//     event.preventDefault()
//     tabTrigger.show()
//   })
// })
//open catergory modal
$('#CategoryModal').on('click',".viewCategoryModal",function(e){
  var tabTrigger = e.currentTarget.dataset;
  console.log(tabTrigger)
  $('#tutorial').val(tabTrigger.tutorial);
  $('#delay').val(tabTrigger.delay);
  $('#dcmotor').val(tabTrigger.dcmotor);
  $('#loops').val(tabTrigger.loops);
  $('#ifelse').val(tabTrigger.ifelse);
  $('#custom').val(tabTrigger.custom);
})
