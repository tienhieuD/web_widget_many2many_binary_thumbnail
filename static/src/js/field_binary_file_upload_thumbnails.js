odoo.define('web.field_binary_file_upload_thumbnails', function(require) {
"use strict";

    var relational_fields = require('web.relational_fields');
    var registry = require('web.field_registry');
    var core = require('web.core');
    var qweb = core.qweb;

    var FieldMany2ManyBinaryMultiFilesWithThumbnail = relational_fields.FieldMany2ManyBinaryMultiFiles.extend({
        _render: function() {
            this._super.apply(this, arguments);
            this.$('.oe_placeholder_files, .oe_attachments')
                .replaceWith($(qweb.render('FieldBinaryFileUploader.thumbnails', {
                    widget: this,
                })));
            this.$('.o_image[data-mimetype^="image"]').each(function() {
                var $img = $(this);
                if (/gif|jpe|jpg|png/.test($img.data('mimetype')) && $img.data('src')) {
                    $img.css('background-image', "url('" + $img.data('src') + "')");
                }
            });
        },
    });

    registry.add('many2many_binary_thumbnail', FieldMany2ManyBinaryMultiFilesWithThumbnail)

    return {
        FieldMany2ManyBinaryMultiFilesWithThumbnail: FieldMany2ManyBinaryMultiFilesWithThumbnail,
    };

});