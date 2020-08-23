function _createModal(options) {
  const title = options.title;


  const modal = document.createElement('div');
  modal.classList.add('vmodal');
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
    <div class="modal-window">
      <!-- header -->
      <div class="modal-header">
        <div class="modal-title">${title}</div>
        <div class="modal-close">&times;</div>
      </div>
      <!-- body -->
      <div class="modal-body">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="modal-footer">
        <button class="button">ok</button>
        <button class="button">Cancel</button>
      </div>
    </div>
  </div>
`);

  document.body.appendChild(modal);
  return modal;
}


$.modal = function (options) {
  const $modal = _createModal(options);
  const ANIMATION_SPEED = 200;
  let closing = false;

  return {
    open() {
      !closing && $modal.classList.add('open');
    },
    close() {
      closing = true;
      $modal.classList.remove('open');
      $modal.classList.add('hide');
      setTimeout(() => {
        $modal.classList.remove('hide');
        closing = false;
      }, ANIMATION_SPEED);
    },
    destroy() { }
  }
};