document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    height: 600,
    initialView: 'dayGridMonth',
    initialDate: '2022-12-05',
    headerToolbar: {
      left: 'dayGridMonth,timeGridWeek,timeGridDay,addEventButton',
      center: 'title',
      right: 'today,prevYear,prev,next,nextYear'
    },
    footerToolbar: {
      left: 'custom1,custom2',
      center: '',
      right: 'prev,next'
    },
    customButtons: {
      addEventButton: {
        text: 'add event...',
        click: function() {
          var dateStr = prompt('Enter a date in YYYY-MM-DD format');
          var date = new Date(dateStr + 'T00:00:00'); // will be in local time

          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
              title: 'dynamic event',
              start: date,
              allDay: true
            });
            alert('Great. Now, update your database...');
          } else {
            alert('Invalid date.');
          }
        }
      }
    },
    events: [
      {
        title: 'All Day Event',
        start: '2022-12-11'
      }
    ]
  });
  calendar.render();
});

$('#meetingModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('info') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('Next Event')
  modal.find('.modal-body input').val(recipient)
})

$('#calendarModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('target') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('Event calendar')
  modal.find('.modal-body input').val(recipient)
})