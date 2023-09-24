import { Section } from '../../../domain/Section';
import { SectionRepository } from '../../../domain/SectionRepository';
import { MongooseRepository } from '../../../../../Shared/infrastructure/persistence/mongo/MongooseRepository';
import { Schema } from 'mongoose';

const sectionSchema = new Schema({
  _id: String,
  name: String,
  code: String,
  value: String
});

export class MongoSectionRepository extends MongooseRepository<Section> implements SectionRepository {
  save(section: Section): Promise<void> {
    return this.persist(section.id.value, section);
  }

  async search(): Promise<Section[]> {
    const model = await this.model(this.schema());
    const documents = await model.find();
    return documents.map(document => {
      return Section.fromPrimitives({
        id: document._id as string,
        name: document.name.value,
        code: document.code.value,
        value: document.value.value
      });
    });
  }

  modelName(): string {
    return 'Section';
  }

  schema(): Schema {
    return sectionSchema;
  }
}
