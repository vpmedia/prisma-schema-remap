import { formatSchema as formatSchemaInternal } from '@prisma/internals';

export const formatSchema = async (contents: string) => {
  const formated = await formatSchemaInternal({ schemas: [["prisma.prisma", contents]] });
  return formated[0][1];
}
