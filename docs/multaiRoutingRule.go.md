# `spotinst_multai_routing_rule`

Refer to the Terraform Registory for docs: [`spotinst_multai_routing_rule`](https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule).

# `multaiRoutingRule` Submodule <a name="`multaiRoutingRule` Submodule" id="@cdktf/provider-spotinst.multaiRoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MultaiRoutingRule <a name="MultaiRoutingRule" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule spotinst_multai_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/multairoutingrule"

multairoutingrule.NewMultaiRoutingRule(scope Construct, id *string, config MultaiRoutingRuleConfig) MultaiRoutingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig">MultaiRoutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig">MultaiRoutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetMiddlewareIds">ResetMiddlewareIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetStrategy">ResetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetId"></a>

```go
func ResetId()
```

##### `ResetMiddlewareIds` <a name="ResetMiddlewareIds" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetMiddlewareIds"></a>

```go
func ResetMiddlewareIds()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetStrategy"></a>

```go
func ResetStrategy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/multairoutingrule"

multairoutingrule.MultaiRoutingRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/multairoutingrule"

multairoutingrule.MultaiRoutingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/multairoutingrule"

multairoutingrule.MultaiRoutingRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList">MultaiRoutingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.balancerIdInput">BalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.listenerIdInput">ListenerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.middlewareIdsInput">MiddlewareIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.routeInput">RouteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.strategyInput">StrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.targetSetIdsInput">TargetSetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.balancerId">BalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.listenerId">ListenerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.middlewareIds">MiddlewareIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.route">Route</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.strategy">Strategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.targetSetIds">TargetSetIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.tags"></a>

```go
func Tags() MultaiRoutingRuleTagsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList">MultaiRoutingRuleTagsList</a>

---

##### `BalancerIdInput`<sup>Optional</sup> <a name="BalancerIdInput" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.balancerIdInput"></a>

```go
func BalancerIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListenerIdInput`<sup>Optional</sup> <a name="ListenerIdInput" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.listenerIdInput"></a>

```go
func ListenerIdInput() *string
```

- *Type:* *string

---

##### `MiddlewareIdsInput`<sup>Optional</sup> <a name="MiddlewareIdsInput" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.middlewareIdsInput"></a>

```go
func MiddlewareIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RouteInput`<sup>Optional</sup> <a name="RouteInput" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.routeInput"></a>

```go
func RouteInput() *string
```

- *Type:* *string

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.strategyInput"></a>

```go
func StrategyInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetSetIdsInput`<sup>Optional</sup> <a name="TargetSetIdsInput" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.targetSetIdsInput"></a>

```go
func TargetSetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BalancerId`<sup>Required</sup> <a name="BalancerId" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.balancerId"></a>

```go
func BalancerId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.listenerId"></a>

```go
func ListenerId() *string
```

- *Type:* *string

---

##### `MiddlewareIds`<sup>Required</sup> <a name="MiddlewareIds" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.middlewareIds"></a>

```go
func MiddlewareIds() *[]*string
```

- *Type:* *[]*string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.route"></a>

```go
func Route() *string
```

- *Type:* *string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.strategy"></a>

```go
func Strategy() *string
```

- *Type:* *string

---

##### `TargetSetIds`<sup>Required</sup> <a name="TargetSetIds" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.targetSetIds"></a>

```go
func TargetSetIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MultaiRoutingRuleConfig <a name="MultaiRoutingRuleConfig" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/multairoutingrule"

&multairoutingrule.MultaiRoutingRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BalancerId: *string,
	ListenerId: *string,
	Route: *string,
	TargetSetIds: *[]*string,
	Id: *string,
	MiddlewareIds: *[]*string,
	Priority: *f64,
	Strategy: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.balancerId">BalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#balancer_id MultaiRoutingRule#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.listenerId">ListenerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#listener_id MultaiRoutingRule#listener_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.route">Route</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#route MultaiRoutingRule#route}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.targetSetIds">TargetSetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#target_set_ids MultaiRoutingRule#target_set_ids}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#id MultaiRoutingRule#id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.middlewareIds">MiddlewareIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#middleware_ids MultaiRoutingRule#middleware_ids}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#priority MultaiRoutingRule#priority}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.strategy">Strategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#strategy MultaiRoutingRule#strategy}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BalancerId`<sup>Required</sup> <a name="BalancerId" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.balancerId"></a>

```go
BalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#balancer_id MultaiRoutingRule#balancer_id}.

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.listenerId"></a>

```go
ListenerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#listener_id MultaiRoutingRule#listener_id}.

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.route"></a>

```go
Route *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#route MultaiRoutingRule#route}.

---

##### `TargetSetIds`<sup>Required</sup> <a name="TargetSetIds" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.targetSetIds"></a>

```go
TargetSetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#target_set_ids MultaiRoutingRule#target_set_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#id MultaiRoutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MiddlewareIds`<sup>Optional</sup> <a name="MiddlewareIds" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.middlewareIds"></a>

```go
MiddlewareIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#middleware_ids MultaiRoutingRule#middleware_ids}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#priority MultaiRoutingRule#priority}.

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.strategy"></a>

```go
Strategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#strategy MultaiRoutingRule#strategy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#tags MultaiRoutingRule#tags}

---

### MultaiRoutingRuleTags <a name="MultaiRoutingRuleTags" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/multairoutingrule"

&multairoutingrule.MultaiRoutingRuleTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#key MultaiRoutingRule#key}. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#value MultaiRoutingRule#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#key MultaiRoutingRule#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.119.1/docs/resources/multai_routing_rule#value MultaiRoutingRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MultaiRoutingRuleTagsList <a name="MultaiRoutingRuleTagsList" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/multairoutingrule"

multairoutingrule.NewMultaiRoutingRuleTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MultaiRoutingRuleTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.get"></a>

```go
func Get(index *f64) MultaiRoutingRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MultaiRoutingRuleTagsOutputReference <a name="MultaiRoutingRuleTagsOutputReference" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/multairoutingrule"

multairoutingrule.NewMultaiRoutingRuleTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MultaiRoutingRuleTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.multaiRoutingRule.MultaiRoutingRuleTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



