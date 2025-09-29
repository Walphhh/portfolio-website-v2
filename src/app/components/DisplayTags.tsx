import { TagTypes } from "@utils/types";
import { Badge } from "@shadcn-ui/badge";

interface DisplayTagsProps {
  tags: TagTypes[];
}

const DisplayTags = ({ tags }: DisplayTagsProps) => {
  return (
    <div className="flex-wrap space-x-1">
      {tags.map((tag) => {
        return (
          <Badge key={tag} variant={"secondary"}>
            {tag}
          </Badge>
        );
      })}
    </div>
  );
};

export default DisplayTags;
