<?php // Trigger (show/hide toggle) button ?>
<button
  type="button"
  class="btn btn-duplicate"
  data-fieldname="<?= $field->name(); ?>"
>
  <i class="icon fa fa-clone"></i><?php e($buttontext, $buttontext, 'Clone page') ?>
</button>

<?php // Titel ?>
<label class="label hide-duplicate"><?= l::get('pages.add.title.placeholder')?></label>
<input
  id="form-field-duplicate-title"
  type="text"
  class="input hide-duplicate"
/>

<?php // Url ?>
<label class="label hide-duplicate"><?= l::get('pages.url.uid.label') ?></label>
<input
  id="form-field-duplicate-uid"
  type="text"
  class="input hide-duplicate"
  value="<?= $page->uid()?>"
/>

<?php // Submit ?>
<button
  id="form-field-duplicate-submit"
  class="btn btn-rounded btn-duplicate-submit hide-duplicate"
>
  <?php e($buttontextsubmit, $buttontextsubmit, 'Clone') ?>
</button>

<?php // Message to frontend ?>
<div class="message-duplicate"></div>

<?php // Redirect message ?>
<input
  id="form-field-duplicate-redirectmessage"
  type="hidden"
  value="<?= $redirectmessage ?:
    'The page was successfully created. You will be redirected to the new page...'; ?>"
/>