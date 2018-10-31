# web_widget_many2many_binary_thumbnail

Demo: https://i.imgur.com/EdtouGl.gifv

Example usage:

- Install module `web_widget_many2many_binary_thumbnail`

- At python model:

```python
attachment_ids = field.Many2many('ir.attachment')
```

- Form Views:

```xml
<field name="attachment_ids" widget="many2many_binary_thumbnail"/>
```
