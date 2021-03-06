import S from '@sanity/desk-tool/structure-builder'

export default () =>
	S.list()
		.title('Content')
		.items(
			[
				S.listItem()
					.title('Site Settings')
					.child(
						S.document()
							.schemaType('siteSettings')
							.documentId('siteSettings')
					),
				S.divider(),
				...S.documentTypeListItems().filter(
					item => !['siteSettings'].includes(item.getId())
				)
			]
		)
