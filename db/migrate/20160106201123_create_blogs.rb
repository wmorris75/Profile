class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :tag
      t.text :text

      t.timestamps
    end
  end
end
