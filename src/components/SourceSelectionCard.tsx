import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { imageUrls, videoUrls } from '../helpers/sourceHelper'
import ImageButton from './ImageButton'
import VideoButton from './VideoButton'

// TODO Handle cameras and videos
type SourceSelectionCardProps = {
  sourceUrl: string
  onSourceUrlChange: (sourceUrl: string) => void
}

function SourceSelectionCard(props: SourceSelectionCardProps) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Source
        </Typography>
        {imageUrls.map((imageUrl) => (
          <ImageButton
            key={imageUrl}
            imageUrl={imageUrl}
            isActive={imageUrl === props.sourceUrl}
            onClick={() => props.onSourceUrlChange(imageUrl)}
          />
        ))}
        {videoUrls.map((videoUrl) => (
          <VideoButton
            key={videoUrl}
            videoUrl={videoUrl}
            isActive={videoUrl === props.sourceUrl}
            onClick={() => props.onSourceUrlChange(videoUrl)}
          />
        ))}
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
    },
  })
)

export default SourceSelectionCard
