const previewAssets = import.meta.glob('../../assets/images/previews/*', {
  eager: true,
  import: 'default',
  query: '?url',
})

function normalize(value = '') {
  return value.toLowerCase().replace(/\.[^.]+$/, '').replace(/[^a-z0-9]/g, '')
}

function resolvePreviewUrl(imageName) {
  if (!imageName) return null

  const requestedName = normalize(imageName)
  const assetEntry = Object.entries(previewAssets).find(([path]) => normalize(path.split('/').pop()) === requestedName)
  return assetEntry?.[1] ?? null
}

export default function ProjectPreview({ project }) {
  const imageUrl = resolvePreviewUrl(project?.previewImage)
  if (!imageUrl) return null

  if (project.associatedTo == 'Mobile Application Development'){
    return (
			<img
				className={`project-preview-mobile-app`.trim()}
				src={imageUrl}
				alt={`${project.title} preview`}
			/>
    )  
  }


	return (
		<img
			className={`project-preview`.trim()}
			src={imageUrl}
			alt={`${project.title} preview`}
		/>
	)  

  
}
