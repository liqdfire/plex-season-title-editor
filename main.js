var titleHTML = '<div class="row"> <div class="col-md-12"> <div class="form-group selectize-group" data-attr="title"> <label for="lockable-title">Title</label> <div class="input-group"> <a href="#" data-field="title" class="input-group-addon edit-lock-addon" tabindex="-1"><i class="glyphicon lock"></i></a>  <input type="text" id="lockable-title" class="form-control lockable-field" name="title" placeholder="" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">  </div> </div>  </div> </div>';

var observer = new MutationObserver(function (mutations) {

  if (/\/details\?key=%2Flibrary%2Fmetadata%2F(\d+)$/.test(document.URL)) {
    mutations.forEach(function (mutation) {
      var newNodes = mutation.addedNodes; // DOM NodeList
      if (newNodes !== null) { // If there are new nodes added
        var $nodes = $(newNodes); // jQuery set
        $nodes.each(function () {
          var $node = $(this);
          if ($node.has(".edit-metadata-form").length) {
            var $form = $($node.children(".edit-metadata-form")[0]);
            if (!$form.has("#lockable-title").length) {
              $form.prepend(titleHTML);
            }
          }
        });
      }
    });
  }
});


var config = {
  attributes: true,
  childList: true,
  subtree: true
};

observer.observe(document.documentElement, config);

window.unload = function() {
  observer.disconnect();  
}
