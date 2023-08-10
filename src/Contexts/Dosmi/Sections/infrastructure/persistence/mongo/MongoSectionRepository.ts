import { MongoRepository } from '../../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { Section } from '../../../domain/Section';
import { SectionRepository } from '../../../domain/SectionRepository';
import { ObjectId } from 'mongodb';

interface SectionDocument {
  _id: ObjectId;
  name: string;
  code: string;
  value: string;
}

export class MongoSectionRepository extends MongoRepository<Section> implements SectionRepository {
  protected collectionName(): string {
    return 'sections';
  }

  async search(): Promise<Section[]> {
    const collection = await this.collection();
    const documents = await collection.find<SectionDocument>({}).toArray();
    return documents.map(document => {
      return Section.fromPrimitives({
        id: document._id.toString(),
        name: document.name,
        code: document.code,
        value: document.value
      });
    });
  }
}
