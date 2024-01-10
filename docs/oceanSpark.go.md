# `oceanSpark` Submodule <a name="`oceanSpark` Submodule" id="@cdktf/provider-spotinst.oceanSpark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanSpark <a name="OceanSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark spotinst_ocean_spark}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.NewOceanSpark(scope Construct, id *string, config OceanSparkConfig) OceanSpark
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig">OceanSparkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig">OceanSparkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute">PutCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress">PutIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection">PutLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark">PutSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook">PutWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetCompute">ResetCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetIngress">ResetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetLogCollection">ResetLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetSpark">ResetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWebhook">ResetWebhook</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCompute` <a name="PutCompute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute"></a>

```go
func PutCompute(value OceanSparkCompute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---

##### `PutIngress` <a name="PutIngress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress"></a>

```go
func PutIngress(value OceanSparkIngress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---

##### `PutLogCollection` <a name="PutLogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection"></a>

```go
func PutLogCollection(value OceanSparkLogCollection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---

##### `PutSpark` <a name="PutSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark"></a>

```go
func PutSpark(value OceanSparkSpark)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---

##### `PutWebhook` <a name="PutWebhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook"></a>

```go
func PutWebhook(value OceanSparkWebhook)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---

##### `ResetCompute` <a name="ResetCompute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetCompute"></a>

```go
func ResetCompute()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetId"></a>

```go
func ResetId()
```

##### `ResetIngress` <a name="ResetIngress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetIngress"></a>

```go
func ResetIngress()
```

##### `ResetLogCollection` <a name="ResetLogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetLogCollection"></a>

```go
func ResetLogCollection()
```

##### `ResetSpark` <a name="ResetSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetSpark"></a>

```go
func ResetSpark()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWebhook"></a>

```go
func ResetWebhook()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceanSpark resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.OceanSpark_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.OceanSpark_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.OceanSpark_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.OceanSpark_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OceanSpark resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OceanSpark to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OceanSpark that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OceanSpark to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.compute">Compute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference">OceanSparkComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference">OceanSparkIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollection">LogCollection</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference">OceanSparkLogCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.spark">Spark</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference">OceanSparkSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhook">Webhook</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference">OceanSparkWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.computeInput">ComputeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingressInput">IngressInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollectionInput">LogCollectionInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterIdInput">OceanClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.sparkInput">SparkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhookInput">WebhookInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterId">OceanClusterId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.compute"></a>

```go
func Compute() OceanSparkComputeOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference">OceanSparkComputeOutputReference</a>

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingress"></a>

```go
func Ingress() OceanSparkIngressOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference">OceanSparkIngressOutputReference</a>

---

##### `LogCollection`<sup>Required</sup> <a name="LogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollection"></a>

```go
func LogCollection() OceanSparkLogCollectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference">OceanSparkLogCollectionOutputReference</a>

---

##### `Spark`<sup>Required</sup> <a name="Spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.spark"></a>

```go
func Spark() OceanSparkSparkOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference">OceanSparkSparkOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhook"></a>

```go
func Webhook() OceanSparkWebhookOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference">OceanSparkWebhookOutputReference</a>

---

##### `ComputeInput`<sup>Optional</sup> <a name="ComputeInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.computeInput"></a>

```go
func ComputeInput() OceanSparkCompute
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingressInput"></a>

```go
func IngressInput() OceanSparkIngress
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---

##### `LogCollectionInput`<sup>Optional</sup> <a name="LogCollectionInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollectionInput"></a>

```go
func LogCollectionInput() OceanSparkLogCollection
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---

##### `OceanClusterIdInput`<sup>Optional</sup> <a name="OceanClusterIdInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterIdInput"></a>

```go
func OceanClusterIdInput() *string
```

- *Type:* *string

---

##### `SparkInput`<sup>Optional</sup> <a name="SparkInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.sparkInput"></a>

```go
func SparkInput() OceanSparkSpark
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhookInput"></a>

```go
func WebhookInput() OceanSparkWebhook
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OceanClusterId`<sup>Required</sup> <a name="OceanClusterId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterId"></a>

```go
func OceanClusterId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanSparkCompute <a name="OceanSparkCompute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

&oceanspark.OceanSparkCompute {
	CreateVngs: interface{},
	UseTaints: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.createVngs">CreateVngs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#create_vngs OceanSpark#create_vngs}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.useTaints">UseTaints</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#use_taints OceanSpark#use_taints}. |

---

##### `CreateVngs`<sup>Optional</sup> <a name="CreateVngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.createVngs"></a>

```go
CreateVngs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#create_vngs OceanSpark#create_vngs}.

---

##### `UseTaints`<sup>Optional</sup> <a name="UseTaints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.useTaints"></a>

```go
UseTaints interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#use_taints OceanSpark#use_taints}.

---

### OceanSparkConfig <a name="OceanSparkConfig" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

&oceanspark.OceanSparkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OceanClusterId: *string,
	Compute: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanSpark.OceanSparkCompute,
	Id: *string,
	Ingress: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanSpark.OceanSparkIngress,
	LogCollection: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanSpark.OceanSparkLogCollection,
	Spark: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanSpark.OceanSparkSpark,
	Webhook: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanSpark.OceanSparkWebhook,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.oceanClusterId">OceanClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.compute">Compute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#id OceanSpark#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | ingress block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.logCollection">LogCollection</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | log_collection block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.spark">Spark</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.webhook">Webhook</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | webhook block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OceanClusterId`<sup>Required</sup> <a name="OceanClusterId" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.oceanClusterId"></a>

```go
OceanClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}.

---

##### `Compute`<sup>Optional</sup> <a name="Compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.compute"></a>

```go
Compute OceanSparkCompute
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#compute OceanSpark#compute}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#id OceanSpark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.ingress"></a>

```go
Ingress OceanSparkIngress
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#ingress OceanSpark#ingress}

---

##### `LogCollection`<sup>Optional</sup> <a name="LogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.logCollection"></a>

```go
LogCollection OceanSparkLogCollection
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

log_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#log_collection OceanSpark#log_collection}

---

##### `Spark`<sup>Optional</sup> <a name="Spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.spark"></a>

```go
Spark OceanSparkSpark
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#spark OceanSpark#spark}

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.webhook"></a>

```go
Webhook OceanSparkWebhook
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#webhook OceanSpark#webhook}

---

### OceanSparkIngress <a name="OceanSparkIngress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

&oceanspark.OceanSparkIngress {
	Controller: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanSpark.OceanSparkIngressController,
	CustomEndpoint: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanSpark.OceanSparkIngressCustomEndpoint,
	LoadBalancer: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanSpark.OceanSparkIngressLoadBalancer,
	PrivateLink: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanSpark.OceanSparkIngressPrivateLink,
	ServiceAnnotations: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.controller">Controller</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | controller block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.privateLink">PrivateLink</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | private_link block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.serviceAnnotations">ServiceAnnotations</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}. |

---

##### `Controller`<sup>Optional</sup> <a name="Controller" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.controller"></a>

```go
Controller OceanSparkIngressController
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#controller OceanSpark#controller}

---

##### `CustomEndpoint`<sup>Optional</sup> <a name="CustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.customEndpoint"></a>

```go
CustomEndpoint OceanSparkIngressCustomEndpoint
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#custom_endpoint OceanSpark#custom_endpoint}

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.loadBalancer"></a>

```go
LoadBalancer OceanSparkIngressLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#load_balancer OceanSpark#load_balancer}

---

##### `PrivateLink`<sup>Optional</sup> <a name="PrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.privateLink"></a>

```go
PrivateLink OceanSparkIngressPrivateLink
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

private_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#private_link OceanSpark#private_link}

---

##### `ServiceAnnotations`<sup>Optional</sup> <a name="ServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.serviceAnnotations"></a>

```go
ServiceAnnotations *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}.

---

### OceanSparkIngressController <a name="OceanSparkIngressController" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

&oceanspark.OceanSparkIngressController {
	Managed: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.property.managed">Managed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#managed OceanSpark#managed}. |

---

##### `Managed`<sup>Optional</sup> <a name="Managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.property.managed"></a>

```go
Managed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#managed OceanSpark#managed}.

---

### OceanSparkIngressCustomEndpoint <a name="OceanSparkIngressCustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

&oceanspark.OceanSparkIngressCustomEndpoint {
	Address: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#address OceanSpark#address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#address OceanSpark#address}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}.

---

### OceanSparkIngressLoadBalancer <a name="OceanSparkIngressLoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

&oceanspark.OceanSparkIngressLoadBalancer {
	Managed: interface{},
	ServiceAnnotations: *map[string]*string,
	TargetGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.managed">Managed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#managed OceanSpark#managed}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.serviceAnnotations">ServiceAnnotations</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#target_group_arn OceanSpark#target_group_arn}. |

---

##### `Managed`<sup>Optional</sup> <a name="Managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.managed"></a>

```go
Managed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#managed OceanSpark#managed}.

---

##### `ServiceAnnotations`<sup>Optional</sup> <a name="ServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.serviceAnnotations"></a>

```go
ServiceAnnotations *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}.

---

##### `TargetGroupArn`<sup>Optional</sup> <a name="TargetGroupArn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.targetGroupArn"></a>

```go
TargetGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#target_group_arn OceanSpark#target_group_arn}.

---

### OceanSparkIngressPrivateLink <a name="OceanSparkIngressPrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

&oceanspark.OceanSparkIngressPrivateLink {
	Enabled: interface{},
	VpcEndpointService: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.vpcEndpointService">VpcEndpointService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#vpc_endpoint_service OceanSpark#vpc_endpoint_service}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}.

---

##### `VpcEndpointService`<sup>Optional</sup> <a name="VpcEndpointService" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.vpcEndpointService"></a>

```go
VpcEndpointService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#vpc_endpoint_service OceanSpark#vpc_endpoint_service}.

---

### OceanSparkLogCollection <a name="OceanSparkLogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

&oceanspark.OceanSparkLogCollection {
	CollectAppLogs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.property.collectAppLogs">CollectAppLogs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#collect_app_logs OceanSpark#collect_app_logs}. |

---

##### `CollectAppLogs`<sup>Optional</sup> <a name="CollectAppLogs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.property.collectAppLogs"></a>

```go
CollectAppLogs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#collect_app_logs OceanSpark#collect_app_logs}.

---

### OceanSparkSpark <a name="OceanSparkSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

&oceanspark.OceanSparkSpark {
	AdditionalAppNamespaces: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.property.additionalAppNamespaces">AdditionalAppNamespaces</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#additional_app_namespaces OceanSpark#additional_app_namespaces}. |

---

##### `AdditionalAppNamespaces`<sup>Optional</sup> <a name="AdditionalAppNamespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.property.additionalAppNamespaces"></a>

```go
AdditionalAppNamespaces *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#additional_app_namespaces OceanSpark#additional_app_namespaces}.

---

### OceanSparkWebhook <a name="OceanSparkWebhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

&oceanspark.OceanSparkWebhook {
	HostNetworkPorts: *[]*f64,
	UseHostNetwork: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.hostNetworkPorts">HostNetworkPorts</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#host_network_ports OceanSpark#host_network_ports}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.useHostNetwork">UseHostNetwork</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#use_host_network OceanSpark#use_host_network}. |

---

##### `HostNetworkPorts`<sup>Optional</sup> <a name="HostNetworkPorts" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.hostNetworkPorts"></a>

```go
HostNetworkPorts *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#host_network_ports OceanSpark#host_network_ports}.

---

##### `UseHostNetwork`<sup>Optional</sup> <a name="UseHostNetwork" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.useHostNetwork"></a>

```go
UseHostNetwork interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/ocean_spark#use_host_network OceanSpark#use_host_network}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanSparkComputeOutputReference <a name="OceanSparkComputeOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.NewOceanSparkComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanSparkComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetCreateVngs">ResetCreateVngs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetUseTaints">ResetUseTaints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreateVngs` <a name="ResetCreateVngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetCreateVngs"></a>

```go
func ResetCreateVngs()
```

##### `ResetUseTaints` <a name="ResetUseTaints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetUseTaints"></a>

```go
func ResetUseTaints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngsInput">CreateVngsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaintsInput">UseTaintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngs">CreateVngs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaints">UseTaints</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateVngsInput`<sup>Optional</sup> <a name="CreateVngsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngsInput"></a>

```go
func CreateVngsInput() interface{}
```

- *Type:* interface{}

---

##### `UseTaintsInput`<sup>Optional</sup> <a name="UseTaintsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaintsInput"></a>

```go
func UseTaintsInput() interface{}
```

- *Type:* interface{}

---

##### `CreateVngs`<sup>Required</sup> <a name="CreateVngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngs"></a>

```go
func CreateVngs() interface{}
```

- *Type:* interface{}

---

##### `UseTaints`<sup>Required</sup> <a name="UseTaints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaints"></a>

```go
func UseTaints() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanSparkCompute
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---


### OceanSparkIngressControllerOutputReference <a name="OceanSparkIngressControllerOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.NewOceanSparkIngressControllerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanSparkIngressControllerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resetManaged">ResetManaged</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManaged` <a name="ResetManaged" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resetManaged"></a>

```go
func ResetManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managedInput">ManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managed">Managed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managedInput"></a>

```go
func ManagedInput() interface{}
```

- *Type:* interface{}

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managed"></a>

```go
func Managed() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanSparkIngressController
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---


### OceanSparkIngressCustomEndpointOutputReference <a name="OceanSparkIngressCustomEndpointOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.NewOceanSparkIngressCustomEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanSparkIngressCustomEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanSparkIngressCustomEndpoint
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---


### OceanSparkIngressLoadBalancerOutputReference <a name="OceanSparkIngressLoadBalancerOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.NewOceanSparkIngressLoadBalancerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanSparkIngressLoadBalancerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetManaged">ResetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetServiceAnnotations">ResetServiceAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetTargetGroupArn">ResetTargetGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManaged` <a name="ResetManaged" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetManaged"></a>

```go
func ResetManaged()
```

##### `ResetServiceAnnotations` <a name="ResetServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetServiceAnnotations"></a>

```go
func ResetServiceAnnotations()
```

##### `ResetTargetGroupArn` <a name="ResetTargetGroupArn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetTargetGroupArn"></a>

```go
func ResetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managedInput">ManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotationsInput">ServiceAnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArnInput">TargetGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managed">Managed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotations">ServiceAnnotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managedInput"></a>

```go
func ManagedInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAnnotationsInput`<sup>Optional</sup> <a name="ServiceAnnotationsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotationsInput"></a>

```go
func ServiceAnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetGroupArnInput`<sup>Optional</sup> <a name="TargetGroupArnInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArnInput"></a>

```go
func TargetGroupArnInput() *string
```

- *Type:* *string

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managed"></a>

```go
func Managed() interface{}
```

- *Type:* interface{}

---

##### `ServiceAnnotations`<sup>Required</sup> <a name="ServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotations"></a>

```go
func ServiceAnnotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanSparkIngressLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---


### OceanSparkIngressOutputReference <a name="OceanSparkIngressOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.NewOceanSparkIngressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanSparkIngressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController">PutController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint">PutCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink">PutPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetController">ResetController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetCustomEndpoint">ResetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetPrivateLink">ResetPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetServiceAnnotations">ResetServiceAnnotations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutController` <a name="PutController" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController"></a>

```go
func PutController(value OceanSparkIngressController)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---

##### `PutCustomEndpoint` <a name="PutCustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint"></a>

```go
func PutCustomEndpoint(value OceanSparkIngressCustomEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer"></a>

```go
func PutLoadBalancer(value OceanSparkIngressLoadBalancer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---

##### `PutPrivateLink` <a name="PutPrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink"></a>

```go
func PutPrivateLink(value OceanSparkIngressPrivateLink)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---

##### `ResetController` <a name="ResetController" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetController"></a>

```go
func ResetController()
```

##### `ResetCustomEndpoint` <a name="ResetCustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetCustomEndpoint"></a>

```go
func ResetCustomEndpoint()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetLoadBalancer"></a>

```go
func ResetLoadBalancer()
```

##### `ResetPrivateLink` <a name="ResetPrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetPrivateLink"></a>

```go
func ResetPrivateLink()
```

##### `ResetServiceAnnotations` <a name="ResetServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetServiceAnnotations"></a>

```go
func ResetServiceAnnotations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controller">Controller</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference">OceanSparkIngressControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference">OceanSparkIngressCustomEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference">OceanSparkIngressLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLink">PrivateLink</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference">OceanSparkIngressPrivateLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controllerInput">ControllerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpointInput">CustomEndpointInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancerInput">LoadBalancerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLinkInput">PrivateLinkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotationsInput">ServiceAnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotations">ServiceAnnotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Controller`<sup>Required</sup> <a name="Controller" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controller"></a>

```go
func Controller() OceanSparkIngressControllerOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference">OceanSparkIngressControllerOutputReference</a>

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpoint"></a>

```go
func CustomEndpoint() OceanSparkIngressCustomEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference">OceanSparkIngressCustomEndpointOutputReference</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancer"></a>

```go
func LoadBalancer() OceanSparkIngressLoadBalancerOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference">OceanSparkIngressLoadBalancerOutputReference</a>

---

##### `PrivateLink`<sup>Required</sup> <a name="PrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLink"></a>

```go
func PrivateLink() OceanSparkIngressPrivateLinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference">OceanSparkIngressPrivateLinkOutputReference</a>

---

##### `ControllerInput`<sup>Optional</sup> <a name="ControllerInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controllerInput"></a>

```go
func ControllerInput() OceanSparkIngressController
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---

##### `CustomEndpointInput`<sup>Optional</sup> <a name="CustomEndpointInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpointInput"></a>

```go
func CustomEndpointInput() OceanSparkIngressCustomEndpoint
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancerInput"></a>

```go
func LoadBalancerInput() OceanSparkIngressLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---

##### `PrivateLinkInput`<sup>Optional</sup> <a name="PrivateLinkInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLinkInput"></a>

```go
func PrivateLinkInput() OceanSparkIngressPrivateLink
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---

##### `ServiceAnnotationsInput`<sup>Optional</sup> <a name="ServiceAnnotationsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotationsInput"></a>

```go
func ServiceAnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServiceAnnotations`<sup>Required</sup> <a name="ServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotations"></a>

```go
func ServiceAnnotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanSparkIngress
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---


### OceanSparkIngressPrivateLinkOutputReference <a name="OceanSparkIngressPrivateLinkOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.NewOceanSparkIngressPrivateLinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanSparkIngressPrivateLinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetVpcEndpointService">ResetVpcEndpointService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetVpcEndpointService` <a name="ResetVpcEndpointService" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetVpcEndpointService"></a>

```go
func ResetVpcEndpointService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointServiceInput">VpcEndpointServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointService">VpcEndpointService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VpcEndpointServiceInput`<sup>Optional</sup> <a name="VpcEndpointServiceInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointServiceInput"></a>

```go
func VpcEndpointServiceInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `VpcEndpointService`<sup>Required</sup> <a name="VpcEndpointService" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointService"></a>

```go
func VpcEndpointService() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanSparkIngressPrivateLink
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---


### OceanSparkLogCollectionOutputReference <a name="OceanSparkLogCollectionOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.NewOceanSparkLogCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanSparkLogCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resetCollectAppLogs">ResetCollectAppLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCollectAppLogs` <a name="ResetCollectAppLogs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resetCollectAppLogs"></a>

```go
func ResetCollectAppLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogsInput">CollectAppLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogs">CollectAppLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollectAppLogsInput`<sup>Optional</sup> <a name="CollectAppLogsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogsInput"></a>

```go
func CollectAppLogsInput() interface{}
```

- *Type:* interface{}

---

##### `CollectAppLogs`<sup>Required</sup> <a name="CollectAppLogs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogs"></a>

```go
func CollectAppLogs() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanSparkLogCollection
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---


### OceanSparkSparkOutputReference <a name="OceanSparkSparkOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.NewOceanSparkSparkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanSparkSparkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resetAdditionalAppNamespaces">ResetAdditionalAppNamespaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalAppNamespaces` <a name="ResetAdditionalAppNamespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resetAdditionalAppNamespaces"></a>

```go
func ResetAdditionalAppNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespacesInput">AdditionalAppNamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespaces">AdditionalAppNamespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalAppNamespacesInput`<sup>Optional</sup> <a name="AdditionalAppNamespacesInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespacesInput"></a>

```go
func AdditionalAppNamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalAppNamespaces`<sup>Required</sup> <a name="AdditionalAppNamespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespaces"></a>

```go
func AdditionalAppNamespaces() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanSparkSpark
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---


### OceanSparkWebhookOutputReference <a name="OceanSparkWebhookOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanspark"

oceanspark.NewOceanSparkWebhookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanSparkWebhookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetHostNetworkPorts">ResetHostNetworkPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetUseHostNetwork">ResetUseHostNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostNetworkPorts` <a name="ResetHostNetworkPorts" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetHostNetworkPorts"></a>

```go
func ResetHostNetworkPorts()
```

##### `ResetUseHostNetwork` <a name="ResetUseHostNetwork" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetUseHostNetwork"></a>

```go
func ResetUseHostNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPortsInput">HostNetworkPortsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetworkInput">UseHostNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPorts">HostNetworkPorts</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetwork">UseHostNetwork</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostNetworkPortsInput`<sup>Optional</sup> <a name="HostNetworkPortsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPortsInput"></a>

```go
func HostNetworkPortsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `UseHostNetworkInput`<sup>Optional</sup> <a name="UseHostNetworkInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetworkInput"></a>

```go
func UseHostNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `HostNetworkPorts`<sup>Required</sup> <a name="HostNetworkPorts" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPorts"></a>

```go
func HostNetworkPorts() *[]*f64
```

- *Type:* *[]*f64

---

##### `UseHostNetwork`<sup>Required</sup> <a name="UseHostNetwork" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetwork"></a>

```go
func UseHostNetwork() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanSparkWebhook
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---



