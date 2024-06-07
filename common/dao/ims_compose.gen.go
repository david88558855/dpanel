// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dao

import (
	"context"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"github.com/donknap/dpanel/common/entity"
)

func newCompose(db *gorm.DB, opts ...gen.DOOption) compose {
	_compose := compose{}

	_compose.composeDo.UseDB(db, opts...)
	_compose.composeDo.UseModel(&entity.Compose{})

	tableName := _compose.composeDo.TableName()
	_compose.ALL = field.NewAsterisk(tableName)
	_compose.ID = field.NewInt32(tableName, "id")
	_compose.Title = field.NewString(tableName, "title")
	_compose.Yaml = field.NewString(tableName, "yaml")
	_compose.Project = field.NewField(tableName, "project")

	_compose.fillFieldMap()

	return _compose
}

type compose struct {
	composeDo

	ALL     field.Asterisk
	ID      field.Int32
	Title   field.String
	Yaml    field.String
	Project field.Field

	fieldMap map[string]field.Expr
}

func (c compose) Table(newTableName string) *compose {
	c.composeDo.UseTable(newTableName)
	return c.updateTableName(newTableName)
}

func (c compose) As(alias string) *compose {
	c.composeDo.DO = *(c.composeDo.As(alias).(*gen.DO))
	return c.updateTableName(alias)
}

func (c *compose) updateTableName(table string) *compose {
	c.ALL = field.NewAsterisk(table)
	c.ID = field.NewInt32(table, "id")
	c.Title = field.NewString(table, "title")
	c.Yaml = field.NewString(table, "yaml")
	c.Project = field.NewField(table, "project")

	c.fillFieldMap()

	return c
}

func (c *compose) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := c.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (c *compose) fillFieldMap() {
	c.fieldMap = make(map[string]field.Expr, 4)
	c.fieldMap["id"] = c.ID
	c.fieldMap["title"] = c.Title
	c.fieldMap["yaml"] = c.Yaml
	c.fieldMap["project"] = c.Project
}

func (c compose) clone(db *gorm.DB) compose {
	c.composeDo.ReplaceConnPool(db.Statement.ConnPool)
	return c
}

func (c compose) replaceDB(db *gorm.DB) compose {
	c.composeDo.ReplaceDB(db)
	return c
}

type composeDo struct{ gen.DO }

type IComposeDo interface {
	gen.SubQuery
	Debug() IComposeDo
	WithContext(ctx context.Context) IComposeDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IComposeDo
	WriteDB() IComposeDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IComposeDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IComposeDo
	Not(conds ...gen.Condition) IComposeDo
	Or(conds ...gen.Condition) IComposeDo
	Select(conds ...field.Expr) IComposeDo
	Where(conds ...gen.Condition) IComposeDo
	Order(conds ...field.Expr) IComposeDo
	Distinct(cols ...field.Expr) IComposeDo
	Omit(cols ...field.Expr) IComposeDo
	Join(table schema.Tabler, on ...field.Expr) IComposeDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IComposeDo
	RightJoin(table schema.Tabler, on ...field.Expr) IComposeDo
	Group(cols ...field.Expr) IComposeDo
	Having(conds ...gen.Condition) IComposeDo
	Limit(limit int) IComposeDo
	Offset(offset int) IComposeDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IComposeDo
	Unscoped() IComposeDo
	Create(values ...*entity.Compose) error
	CreateInBatches(values []*entity.Compose, batchSize int) error
	Save(values ...*entity.Compose) error
	First() (*entity.Compose, error)
	Take() (*entity.Compose, error)
	Last() (*entity.Compose, error)
	Find() ([]*entity.Compose, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Compose, err error)
	FindInBatches(result *[]*entity.Compose, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*entity.Compose) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IComposeDo
	Assign(attrs ...field.AssignExpr) IComposeDo
	Joins(fields ...field.RelationField) IComposeDo
	Preload(fields ...field.RelationField) IComposeDo
	FirstOrInit() (*entity.Compose, error)
	FirstOrCreate() (*entity.Compose, error)
	FindByPage(offset int, limit int) (result []*entity.Compose, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IComposeDo
	UnderlyingDB() *gorm.DB
	schema.Tabler
}

func (c composeDo) Debug() IComposeDo {
	return c.withDO(c.DO.Debug())
}

func (c composeDo) WithContext(ctx context.Context) IComposeDo {
	return c.withDO(c.DO.WithContext(ctx))
}

func (c composeDo) ReadDB() IComposeDo {
	return c.Clauses(dbresolver.Read)
}

func (c composeDo) WriteDB() IComposeDo {
	return c.Clauses(dbresolver.Write)
}

func (c composeDo) Session(config *gorm.Session) IComposeDo {
	return c.withDO(c.DO.Session(config))
}

func (c composeDo) Clauses(conds ...clause.Expression) IComposeDo {
	return c.withDO(c.DO.Clauses(conds...))
}

func (c composeDo) Returning(value interface{}, columns ...string) IComposeDo {
	return c.withDO(c.DO.Returning(value, columns...))
}

func (c composeDo) Not(conds ...gen.Condition) IComposeDo {
	return c.withDO(c.DO.Not(conds...))
}

func (c composeDo) Or(conds ...gen.Condition) IComposeDo {
	return c.withDO(c.DO.Or(conds...))
}

func (c composeDo) Select(conds ...field.Expr) IComposeDo {
	return c.withDO(c.DO.Select(conds...))
}

func (c composeDo) Where(conds ...gen.Condition) IComposeDo {
	return c.withDO(c.DO.Where(conds...))
}

func (c composeDo) Order(conds ...field.Expr) IComposeDo {
	return c.withDO(c.DO.Order(conds...))
}

func (c composeDo) Distinct(cols ...field.Expr) IComposeDo {
	return c.withDO(c.DO.Distinct(cols...))
}

func (c composeDo) Omit(cols ...field.Expr) IComposeDo {
	return c.withDO(c.DO.Omit(cols...))
}

func (c composeDo) Join(table schema.Tabler, on ...field.Expr) IComposeDo {
	return c.withDO(c.DO.Join(table, on...))
}

func (c composeDo) LeftJoin(table schema.Tabler, on ...field.Expr) IComposeDo {
	return c.withDO(c.DO.LeftJoin(table, on...))
}

func (c composeDo) RightJoin(table schema.Tabler, on ...field.Expr) IComposeDo {
	return c.withDO(c.DO.RightJoin(table, on...))
}

func (c composeDo) Group(cols ...field.Expr) IComposeDo {
	return c.withDO(c.DO.Group(cols...))
}

func (c composeDo) Having(conds ...gen.Condition) IComposeDo {
	return c.withDO(c.DO.Having(conds...))
}

func (c composeDo) Limit(limit int) IComposeDo {
	return c.withDO(c.DO.Limit(limit))
}

func (c composeDo) Offset(offset int) IComposeDo {
	return c.withDO(c.DO.Offset(offset))
}

func (c composeDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IComposeDo {
	return c.withDO(c.DO.Scopes(funcs...))
}

func (c composeDo) Unscoped() IComposeDo {
	return c.withDO(c.DO.Unscoped())
}

func (c composeDo) Create(values ...*entity.Compose) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Create(values)
}

func (c composeDo) CreateInBatches(values []*entity.Compose, batchSize int) error {
	return c.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (c composeDo) Save(values ...*entity.Compose) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Save(values)
}

func (c composeDo) First() (*entity.Compose, error) {
	if result, err := c.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Compose), nil
	}
}

func (c composeDo) Take() (*entity.Compose, error) {
	if result, err := c.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Compose), nil
	}
}

func (c composeDo) Last() (*entity.Compose, error) {
	if result, err := c.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Compose), nil
	}
}

func (c composeDo) Find() ([]*entity.Compose, error) {
	result, err := c.DO.Find()
	return result.([]*entity.Compose), err
}

func (c composeDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Compose, err error) {
	buf := make([]*entity.Compose, 0, batchSize)
	err = c.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (c composeDo) FindInBatches(result *[]*entity.Compose, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return c.DO.FindInBatches(result, batchSize, fc)
}

func (c composeDo) Attrs(attrs ...field.AssignExpr) IComposeDo {
	return c.withDO(c.DO.Attrs(attrs...))
}

func (c composeDo) Assign(attrs ...field.AssignExpr) IComposeDo {
	return c.withDO(c.DO.Assign(attrs...))
}

func (c composeDo) Joins(fields ...field.RelationField) IComposeDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Joins(_f))
	}
	return &c
}

func (c composeDo) Preload(fields ...field.RelationField) IComposeDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Preload(_f))
	}
	return &c
}

func (c composeDo) FirstOrInit() (*entity.Compose, error) {
	if result, err := c.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Compose), nil
	}
}

func (c composeDo) FirstOrCreate() (*entity.Compose, error) {
	if result, err := c.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Compose), nil
	}
}

func (c composeDo) FindByPage(offset int, limit int) (result []*entity.Compose, count int64, err error) {
	result, err = c.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = c.Offset(-1).Limit(-1).Count()
	return
}

func (c composeDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = c.Count()
	if err != nil {
		return
	}

	err = c.Offset(offset).Limit(limit).Scan(result)
	return
}

func (c composeDo) Scan(result interface{}) (err error) {
	return c.DO.Scan(result)
}

func (c composeDo) Delete(models ...*entity.Compose) (result gen.ResultInfo, err error) {
	return c.DO.Delete(models)
}

func (c *composeDo) withDO(do gen.Dao) *composeDo {
	c.DO = *do.(*gen.DO)
	return c
}